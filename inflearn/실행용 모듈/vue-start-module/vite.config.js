import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // lintOnsave: false,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  devServer: {
    proxy: 'https://dummy.restapiexample.com/api/v1/employees',
    proxy: 'http://127.0.0.1:5173/',
    proxy: 'http://localhost:5173/',
  },
});
