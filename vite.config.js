import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import components from "unplugin-vue-components/vite";
import analyzer from "rollup-plugin-analyzer";

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    components({
      dirs: ["src/components"], // 自动导入自己的组件，默认src/components
      dts: "src/types/components.d.ts",
    }),
    analyzer({ summaryOnly: true }),
  ],
  server: {
    // host: ENV.VITE_APP_HOST,
    // port: ENV.VITE_APP_PORT,
    proxy: {
      // Record<string, string | ProxyOp 为开发服务器配置代理
      "/api": {
        target: "http://localhost:3080",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace('/api', ''),
      },
    },
  },
});
