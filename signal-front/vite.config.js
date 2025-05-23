import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg'],

  server: {
    host: '127.0.0.1', 
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Laravel-сервер
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },        
  },

  optimizeDeps: {
    include: ['react-toastify'],  // Добавьте эту строку
  },
})
