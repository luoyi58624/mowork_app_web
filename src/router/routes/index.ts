import { RouteRecordRaw, RouterView } from 'vue-router'
import NotFound from '@/views/common/NotFound.vue'
import { pcRoutes } from './pc'
import { h5Routes } from './h5'
import { createLayoutRouter } from 'element-admin-layout'

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/pc/app_version'
	},
	createLayoutRouter(pcRoutes, '/pc', '/pc/app_version'),
	{
		path: '/h5',
		component: RouterView,
		children: h5Routes
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
