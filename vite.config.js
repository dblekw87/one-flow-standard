import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const routeInputs = Object.fromEntries(
  [
    'busan',
    'seoul-arisu',
    'hanwha',
    'merck-korea',
    'daewoong',
    'daewoong-bio',
    'lg-dno',
    'p-ket',
  ].map((route) => [
    `work-${route}`,
    resolve(import.meta.dirname, `work/${route}/index.html`),
  ]),
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...routeInputs,
      },
    },
  },
});
