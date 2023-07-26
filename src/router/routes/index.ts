import { RouteRecordRaw, RouterView } from 'vue-router'
import NotFound from '@/views/common/NotFound.vue'
import { pcRoutes } from './pc'
import { mobileRoutes } from './mobile'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pc'
  },
  {
    path: '/pc',
    component: RouterView,
    children: pcRoutes
  },
  {
    path: '/mobile',
    component: RouterView,
    children: mobileRoutes
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
