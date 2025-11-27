import express from 'express'
import session from 'cookie-session'
import { api } from './api'

import GoogleSignInPlugin from 'vue3-google-signin'

import dotenv from 'dotenv'
dotenv.config({
  path: './src/server/.env',
})

const app = express()

// API setup

app.use(
  session({
    name: 'session',
    keys: [process.env.SECRET || 'dev-key'],
  }),
)
app.use(express.json())
app.use(api)

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(3002, () => console.log('Server is running on port 3002'))
