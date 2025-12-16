import express from 'express'
import session from 'cookie-session'
import path from 'path'
import fs from 'fs'
import { remult } from 'remult'
import { api } from './api'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import dotenv from 'dotenv'
import { UserFlower } from '@/shared'
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

app.get('/api/images/flowers/:speciesId/:type', async (req, res) => {
  await api.withRemult(req, res, async () => {
    const { speciesId, type } = req.params

    if (type !== 'icon' && type !== 'sprite') return res.status(404).send()

    const secureDir = path.join(__dirname, '../private/assets/flowers', type)
    const realPath = path.join(secureDir, `${speciesId}.png`)
    const unknownPath = path.join(secureDir, 'unknown.png')

    let allowed = false

    if (remult.user) {
      const count = await remult.repo(UserFlower).count({
        ownerId: remult.user.id,
        speciesId: speciesId,
      })
      if (count > 0) allowed = true
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
