import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteSSG } from 'vite-plugin-ssg'; // Using the modern SSG plugin

export default defineConfig({
  plugins: [
    react(),
    // This plugin handles the "snapshotting" automatically
    ViteSSG({
      // List your 16 routes here
      routes: [
        '/',
        '/nature-explorer',
        '/space-adventure',
        '/ocean-explorer',
        '/time-travelers',
        '/creative-corner',
        '/unscrambler',
        '/translator',
        '/comics',
        '/blog/aztec-and-maya-civilizations-for-kids',
        '/blog/mind-blowing-space-facts',
        '/blog/why-kids-should-learn-languages',
        '/blog/ocean-facts-for-kids',
        '/blog/how-egyptians-built-the-pyramids',
        '/blog/why-comics-are-good-for-kids',
        '/blog/ancient-china-inventions',
        '/blog/word-unscrambler-tips-for-kids',
        '/blog/ancient-greece-facts-for-kids',
        '/blog/animals-with-superpowers',
        '/time-travelers/egypt',
        '/time-travelers/greece',
        '/time-travelers/china',
        '/ime-travelers/aztec-maya',
        '/time-travelers/rome',
        // Add your other 14 paths here
      ],
      formatting: 'minify',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
