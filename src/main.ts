import { createApp } from 'vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@varlet/touch-emulator'

import App from './App.vue'
import './styles/index.scss'

import AdminLayout from 'element-admin-layout'
import 'element-admin-layout/dist/style.css'

import 'element-plus/es/components/message-box/style/css'
const app = createApp(App)
app.use(createPinia())

app.use(router)
app.use(AdminLayout, {
	title: 'MoWork后台管理系统',
	logo: '/img/logo.png',
	navbarButtons: []
})
app.mount('#app')
