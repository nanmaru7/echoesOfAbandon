import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // WSL2 System for propagation
  server: {
    watch: {
      usePolling: true,
    },
  },
})
