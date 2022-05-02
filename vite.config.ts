import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import components from "unplugin-vue-components/vite";
import analyzer from "rollup-plugin-analyzer";
// const REPLACEMENT = `${path.resolve(__dirname, "./src")}/`;
export default ({ mode }) => {
  const ENV = loadEnv(mode, process.cwd());
  const API_PREFIX = ENV.VITE_APP_API_PREFIX || "/api";
  const API_HOST = ENV.VITE_APP_API_HOST || "http://localhost";
  const API_PORT = ENV.VITE_APP_API_PORT || "3000";
  const API_URL = `${API_HOST}:${API_PORT}`;

  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_PATH, // 开发以及部署的base路径
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
      host: ENV.VITE_APP_APP_HOST,
      port: +ENV.VITE_APP_APP_PORT,
      proxy: {
        // Record<string, string | ProxyOp 为开发服务器配置代理
        [API_PREFIX]: {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(API_PREFIX, ""),
        },
      },
    },
  });
};
