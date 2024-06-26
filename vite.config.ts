import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		UnoCSS(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue', 'pinia'],
			dirs: ['./src/store', './src/http', './src/utils', './src/config', './src/composables'],
			dts: true
		}),
		Components({
			resolvers: [ElementPlusResolver()],
			extensions: ['vue', 'tsx'],
			deep: true,
			directoryAsNamespace: false,
			dirs: ['src/components'],
			dts: true
		})
	],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: `js/app.${new Date().getTime()}.js`,
				chunkFileNames: `js/[name].${new Date().getTime()}.js`,
				assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
				compact: true,
				manualChunks: {
					'vendors/vue': ['vue', 'vue-router', 'pinia'],
					'vendors/common': ['lodash-es', 'dayjs', 'axios', 'nprogress'],
					'vendors/element-ui': ['element-plus'],
					'vendors/element-admin-layout': ['element-admin-layout']
				}
			}
		}
	}
})
