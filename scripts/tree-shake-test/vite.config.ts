import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'main.ts'),
      formats: ['es'],
      fileName: () => 'bundle.js',
    },
    minify: false,
    outDir: resolve(import.meta.dirname, 'out'),
    emptyOutDir: true,
  },
});
