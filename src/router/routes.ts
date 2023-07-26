import { RouteRecordRaw, RouterView } from 'vue-router'
import NotFound from '@/views/common/NotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/app_version',
    component: RouterView,
    children: [
      {
        path: '',
        component: () => import('@/views/public/app_version/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }
]
