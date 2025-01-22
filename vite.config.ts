import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure assets are handled correctly
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    },
    // Improve asset handling
    assetsInlineLimit: 4096,
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Ensure clean builds
    emptyOutDir: true
  },
  // Handle static assets
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components'
    }
  }
});