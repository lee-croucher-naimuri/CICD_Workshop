/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: ['dbcmhmojlhytr.cloudfront.net', 'test-a-testf-me0lublauoh2-1305497959.us-east-2.elb.amazonaws.com'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },  
})