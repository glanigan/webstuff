import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'es2022',
  format: ['esm'],
  banner: {},
  entry: [
    'src/index.ts',
    'src/components/**/*.ts',
  ],
  bundle: true,
  splitting: true,
});
