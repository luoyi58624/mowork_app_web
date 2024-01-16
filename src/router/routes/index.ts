import { RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/common/NotFound.vue'
import { createLayoutRouter } from 'element-admin-layout'

export const routes: Array<RouteRecordRaw> = [
	createLayoutRouter(
		[
			{
				path: '',
				name: 'AppVersion',
				meta: {
					title: 'App版本管理',
					icon: 'mingcute:version-fill'
				},
				component: () => import('@/views/app_version/index.vue')
			}
		],
		'/'
	),
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
