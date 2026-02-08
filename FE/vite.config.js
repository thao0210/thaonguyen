import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        // ❌ SAI: "./src/styles/variables.scss"
        // ✅ ĐÚNG: Dùng đường dẫn tương đối hoặc alias
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})