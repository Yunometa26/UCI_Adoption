import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './' // use './' to ensure compatibility with GitHub Pages or relative paths
})
