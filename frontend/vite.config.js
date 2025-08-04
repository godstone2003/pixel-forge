import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Binds to 0.0.0.0 so it's accessible externally
    port: 3000, // Or use 80 if you mapped that in Docker
    allowedHosts: 'all', // OR use an array with your EC2 DNS
    // allowedHosts: ['ec2-3-17-12-25.us-east-2.compute.amazonaws.com']
  }
})
