import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: fileURLToPath(new URL('./index.html', import.meta.url))
    }
  }
});