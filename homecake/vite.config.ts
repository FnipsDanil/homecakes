import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app'], // Разрешает все ngrok-домены
    host: true, // Позволяет слушать на внешнем хосте
    strictPort: true, // Фиксирует порт
  }
})
