import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ include: ['src'], rollupTypes: true, insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
});
