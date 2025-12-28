import { createApp } from 'vue'
import App from './App.vue'

import GoogleSignInPlugin from 'vue3-google-signin'
import { createPinia } from 'pinia'
import { router } from './routes'

import './assets/globals.css'
import './assets/main.css'
import { vUiBlock } from './directives/vUIBlock'

const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
})

app.use(createPinia())
app.use(router)

app.directive('ui-block', vUiBlock)

app.mount('#app')
