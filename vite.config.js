import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: './',

  build: {
    sourcemap: true,
  },

  css: {
    devSourcemap: true,
  },

  plugins: [
    viteCompression({
      verbose: true,
      disable: false,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
})
