import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  // SPA mode: toutes les 404 renvoient index.html (comportement par défaut de Vite)
  appType: 'spa',
})
