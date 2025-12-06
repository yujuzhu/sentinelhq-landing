import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sentinelhq-landing/',   // ★ 这一行很关键：和你的仓库名一致
})
