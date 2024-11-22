import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // optimizeDeps: {
  //   exclude: ["lodash-es"], // 排除后，会取消lodash-es的预构建能力，导致浏览器发送大量的lodash文件请求
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
