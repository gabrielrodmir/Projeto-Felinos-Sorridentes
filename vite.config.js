import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/felinossorridentes/' : '/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: fileURLToPath(new URL('./index.html', import.meta.url))
    }
  }
});