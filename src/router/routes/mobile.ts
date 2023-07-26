import { RouteRecordRaw } from 'vue-router'

export const mobileRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import('@/views/mobile/index.vue')
  },
  {
    path: 'app_version',
    component: () => import('@/views/mobile/app_version/index.vue')
  }
]
