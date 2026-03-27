// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()], // Подключаем плагин для React
  test: {
    environment: 'jsdom', // Включаем эмулятор браузера
    globals: true, // Разрешаем использовать describe, it, expect без импорта
    setupFiles: './vitest.setup.ts', // Файл для предварительной настройки
  },
  resolve: {
    alias: {
      // Настраиваем алиасы (как в tsconfig), чтобы работал импорт '@/*'
      '@': path.resolve(__dirname, './'),
    },
  },
})