// vite.config.js (or vite.config.ts)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost', // Allow localhost (for local development)
      '6ny7zs-5173.csb.app', // Add your CodeSandbox host
      // Add any other hosts as needed (e.g., your deployment domain)
    ],
    // If you are running on a specific port other than 5173, you can specify that here as well.
    // port: 5173,
  },
});