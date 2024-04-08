// vite.config.ts
import { defineConfig } from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/vite@4.4.7_@types+node@20.4.5_sass@1.64.2/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.7_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import UnoCSS from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/unocss@0.54.1_postcss@8.4.27_vite@4.4.7/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/unplugin-auto-import@0.16.6/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/unplugin-vue-components@0.25.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VarletUIResolver, ElementPlusResolver } from "file:///D:/project/vue/mowork_app_web/node_modules/.pnpm/unplugin-vue-components@0.25.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\project\\vue\\mowork_app_web";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [VarletUIResolver({ autoImport: true }), ElementPlusResolver()],
      imports: ["vue", "pinia"],
      dirs: ["./src/store", "./src/http", "./src/utils", "./src/config", "./src/composables"],
      dts: true
    }),
    Components({
      resolvers: [VarletUIResolver(), ElementPlusResolver()],
      extensions: ["vue", "tsx"],
      deep: true,
      directoryAsNamespace: false,
      dirs: ["src/components"],
      dts: true
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `js/app.${(/* @__PURE__ */ new Date()).getTime()}.js`,
        chunkFileNames: `js/[name].${(/* @__PURE__ */ new Date()).getTime()}.js`,
        assetFileNames: `assets/[name].${(/* @__PURE__ */ new Date()).getTime()}.[ext]`,
        compact: true,
        manualChunks: {
          "vendors/vue": ["vue", "vue-router", "pinia"],
          "vendors/common": ["lodash-es", "dayjs", "axios", "nprogress"],
          "vendors/element-ui": ["element-plus"],
          "vendors/element-admin-layout": ["element-admin-layout"],
          "vendors/varlet-ui": ["@varlet/ui", "@varlet/touch-emulator"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXHZ1ZVxcXFxtb3dvcmtfYXBwX3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFx2dWVcXFxcbW93b3JrX2FwcF93ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvdnVlL21vd29ya19hcHBfd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgVmFybGV0VUlSZXNvbHZlciwgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cmVzb2x2ZToge1xyXG5cdFx0YWxpYXM6IHtcclxuXHRcdFx0J0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcclxuXHRcdH1cclxuXHR9LFxyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHZ1ZSgpLFxyXG5cdFx0VW5vQ1NTKCksXHJcblx0XHRBdXRvSW1wb3J0KHtcclxuXHRcdFx0cmVzb2x2ZXJzOiBbVmFybGV0VUlSZXNvbHZlcih7IGF1dG9JbXBvcnQ6IHRydWUgfSksIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcblx0XHRcdGltcG9ydHM6IFsndnVlJywgJ3BpbmlhJ10sXHJcblx0XHRcdGRpcnM6IFsnLi9zcmMvc3RvcmUnLCAnLi9zcmMvaHR0cCcsICcuL3NyYy91dGlscycsICcuL3NyYy9jb25maWcnLCAnLi9zcmMvY29tcG9zYWJsZXMnXSxcclxuXHRcdFx0ZHRzOiB0cnVlXHJcblx0XHR9KSxcclxuXHRcdENvbXBvbmVudHMoe1xyXG5cdFx0XHRyZXNvbHZlcnM6IFtWYXJsZXRVSVJlc29sdmVyKCksIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcblx0XHRcdGV4dGVuc2lvbnM6IFsndnVlJywgJ3RzeCddLFxyXG5cdFx0XHRkZWVwOiB0cnVlLFxyXG5cdFx0XHRkaXJlY3RvcnlBc05hbWVzcGFjZTogZmFsc2UsXHJcblx0XHRcdGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcclxuXHRcdFx0ZHRzOiB0cnVlXHJcblx0XHR9KVxyXG5cdF0sXHJcblx0YnVpbGQ6IHtcclxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcclxuXHRcdFx0b3V0cHV0OiB7XHJcblx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6IGBqcy9hcHAuJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0uanNgLFxyXG5cdFx0XHRcdGNodW5rRmlsZU5hbWVzOiBganMvW25hbWVdLiR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LmpzYCxcclxuXHRcdFx0XHRhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0uW2V4dF1gLFxyXG5cdFx0XHRcdGNvbXBhY3Q6IHRydWUsXHJcblx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XHJcblx0XHRcdFx0XHQndmVuZG9ycy92dWUnOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ3BpbmlhJ10sXHJcblx0XHRcdFx0XHQndmVuZG9ycy9jb21tb24nOiBbJ2xvZGFzaC1lcycsICdkYXlqcycsICdheGlvcycsICducHJvZ3Jlc3MnXSxcclxuXHRcdFx0XHRcdCd2ZW5kb3JzL2VsZW1lbnQtdWknOiBbJ2VsZW1lbnQtcGx1cyddLFxyXG5cdFx0XHRcdFx0J3ZlbmRvcnMvZWxlbWVudC1hZG1pbi1sYXlvdXQnOiBbJ2VsZW1lbnQtYWRtaW4tbGF5b3V0J10sXHJcblx0XHRcdFx0XHQndmVuZG9ycy92YXJsZXQtdWknOiBbJ0B2YXJsZXQvdWknLCAnQHZhcmxldC90b3VjaC1lbXVsYXRvciddXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlSLFNBQVMsb0JBQW9CO0FBQzlTLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsa0JBQWtCLDJCQUEyQjtBQU50RCxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ25DO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1YsV0FBVyxDQUFDLGlCQUFpQixFQUFFLFlBQVksS0FBSyxDQUFDLEdBQUcsb0JBQW9CLENBQUM7QUFBQSxNQUN6RSxTQUFTLENBQUMsT0FBTyxPQUFPO0FBQUEsTUFDeEIsTUFBTSxDQUFDLGVBQWUsY0FBYyxlQUFlLGdCQUFnQixtQkFBbUI7QUFBQSxNQUN0RixLQUFLO0FBQUEsSUFDTixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVixXQUFXLENBQUMsaUJBQWlCLEdBQUcsb0JBQW9CLENBQUM7QUFBQSxNQUNyRCxZQUFZLENBQUMsT0FBTyxLQUFLO0FBQUEsTUFDekIsTUFBTTtBQUFBLE1BQ04sc0JBQXNCO0FBQUEsTUFDdEIsTUFBTSxDQUFDLGdCQUFnQjtBQUFBLE1BQ3ZCLEtBQUs7QUFBQSxJQUNOLENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDUCxnQkFBZ0IsV0FBVSxvQkFBSSxLQUFLLEdBQUUsUUFBUSxDQUFDO0FBQUEsUUFDOUMsZ0JBQWdCLGNBQWEsb0JBQUksS0FBSyxHQUFFLFFBQVEsQ0FBQztBQUFBLFFBQ2pELGdCQUFnQixrQkFBaUIsb0JBQUksS0FBSyxHQUFFLFFBQVEsQ0FBQztBQUFBLFFBQ3JELFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNiLGVBQWUsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLFVBQzVDLGtCQUFrQixDQUFDLGFBQWEsU0FBUyxTQUFTLFdBQVc7QUFBQSxVQUM3RCxzQkFBc0IsQ0FBQyxjQUFjO0FBQUEsVUFDckMsZ0NBQWdDLENBQUMsc0JBQXNCO0FBQUEsVUFDdkQscUJBQXFCLENBQUMsY0FBYyx3QkFBd0I7QUFBQSxRQUM3RDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
