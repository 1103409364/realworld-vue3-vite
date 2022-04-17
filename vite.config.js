import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import analyzer from "rollup-plugin-analyzer";

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), analyzer({ summaryOnly: true })],
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
