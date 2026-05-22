import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: '../dist',
    chunkSizeWarningLimit: 4000, // Monaco is large — suppress the warning
    emptyOutDir: true,
  },
});
