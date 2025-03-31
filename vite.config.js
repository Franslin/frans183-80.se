import viteCompression from 'vite-plugin-compression';

export default {
    // config options
    build: {
        sourcemap: true, // enable production source maps
      },
      css: {
        devSourcemap: true // enable CSS source maps during development
      },
      plugins: [
        viteCompression({
          verbose: true,
          disable: false,
          algorithm: 'brotliCompress',
          ext: '.br',
        })
      ]
  }