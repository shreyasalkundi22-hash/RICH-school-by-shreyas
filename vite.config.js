import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RICH-school-by-shreyas/',
  server: {
    port: 3000,
    open: true
  }
})
