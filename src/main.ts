import { createApp } from 'vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@varlet/touch-emulator'

import App from './App.vue'
import './styles/index.scss'

import router from './router'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')
