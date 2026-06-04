import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <-- Fixed the typo here!

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['recharts'],
  },
})