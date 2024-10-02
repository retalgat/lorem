import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lorem/',
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
    devSourcemap: true,
  },
});
