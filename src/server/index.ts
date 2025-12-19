import express from 'express'
import session from 'cookie-session'
import path from 'path'
import fs from 'fs'
import { remult } from 'remult'
import { api } from './api'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import dotenv from 'dotenv'
import { UserFlower, FlowerSpecies } from '@/shared'
dotenv.config({
  path: './src/server/.env',
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(
  session({
    name: 'session',
    keys: [process.env.SECRET || 'dev-key'],
  }),
)
app.use(express.json())

// Route updated to use :slugName instead of :speciesId
app.get('/api/images/flowers/:slugName/:status/:type', async (req, res) => {
  await api.withRemult(req, res, async () => {
    const { slugName, status, type } = req.params

    const validTypes = ['icon', 'sprite']
    const validStages = ['seed', 'planted', 'mature', 'withered']

    if (!validTypes.includes(type) || !validStages.includes(status)) {
      return res
        .status(404)
        .send(
          'Invalid image type (icon, sprite) or flower status (seed, planted, mature, withered)',
        )
    }

    const secureDir = path.join(__dirname, '../private/assets/flowers', type)
    const fileName = `${slugName}_${status}.png`
    const realPath = path.join(secureDir, fileName)
    const unknownPath = path.join(secureDir, 'unknown.png')

    let allowed = false

    if (remult.user) {
      const speciesRepo = remult.repo(FlowerSpecies)
      const species = await speciesRepo.findFirst({ slugName })

      if (species) {
        const count = await remult.repo(UserFlower).count({
          ownerId: remult.user.id,
          speciesId: species.id,
        })
        if (count > 0) allowed = true
      }
    }

    if (allowed && fs.existsSync(realPath)) {
      return res.sendFile(realPath)
    }

    return res.sendFile(unknownPath)
  })
})

app.use(api)

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(3002, () => console.log('Server is running on port 3002'))
