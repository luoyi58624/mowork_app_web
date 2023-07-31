import { RouteRecordRaw } from 'vue-router'

export const h5Routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: () => import('@/views/h5/index.vue')
  },
  {
    path: 'app_version',
    component: () => import('@/views/h5/app_version/index.vue')
  }
]
