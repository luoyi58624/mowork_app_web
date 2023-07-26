import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import nprogress from '@/plugins/nprogress'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  nprogress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = globalConfig.appTitle
  }
  return true
})

router.afterEach(() => {
  nprogress.done()
})

export default router
