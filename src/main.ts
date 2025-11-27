import { createApp } from 'vue'
import App from './App.vue'

import GoogleSignInPlugin from 'vue3-google-signin'

import dotenv from 'dotenv'
dotenv.config({
  path: './src/server/.env',
})

const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
})

app.mount('#app')
