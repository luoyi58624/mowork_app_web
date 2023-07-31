import { RouteRecordRaw } from 'vue-router'

export const pcRoutes: Array<RouteRecordRaw> = [
  {
    path: 'app_version',
    name: 'AppVersion',
    meta:{
      title: 'App版本管理',
      icon: 'mingcute:version-fill'
    },
    component: () => import('@/views/pc/app_version/index.vue')
  },
]
