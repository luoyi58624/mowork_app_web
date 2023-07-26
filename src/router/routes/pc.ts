import { RouteRecordRaw } from 'vue-router'

export const pcRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import('@/views/pc/index.vue')
  },
  {
    path: 'demo',
    component: () => import('@/views/pc/demo.vue')
  }
]
