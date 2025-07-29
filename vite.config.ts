import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: ['/_vercel/insights/script.js']
    }
  },
  server: {
    port: 3000,
    open: true
  }
}) 