import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
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
      resolvers: [VarletUIResolver({ autoImport: true })],
      imports: ['vue', 'pinia'],
      dirs: ['./src/store', './src/http', './src/utils', './src/config', './src/composables'],
      dts: true
    }),
    Components({
      resolvers: [VarletUIResolver()],
      extensions: ['vue', 'tsx'],
      deep: true,
      directoryAsNamespace: false,
      dirs: ['src/components'],
      dts: true
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: true, // 禁止输出压缩尺寸
    cssCodeSplit: true, // css代码分割，true启用、false禁止
    chunkSizeWarningLimit: 2000, // 文件大小超出警告，单位kb
    rollupOptions: {
      output: {
        entryFileNames: `js/App.${new Date().getTime()}.js`,
        chunkFileNames: `js/[name].${new Date().getTime()}.js`,
        assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
        compact: true,
        manualChunks: {
          'vendors/vue': ['vue', 'vue-router', 'pinia'],
          'vendors/common': ['lodash-es', 'dayjs', 'axios', 'nprogress']
        }
      }
    }
  }
})
