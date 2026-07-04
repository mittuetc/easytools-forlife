import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import prerender from 'vite-plugin-prerender'; // 1. Added import

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const allDeps = Object.keys(pkg.dependencies || {});

export default defineConfig({
  optimizeDeps: {
    include: allDeps,
  },
  plugins: [
    react(),
    // 2. Added the prerender plugin
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      // List all 16 of your routes here:
      routes: [
        '/', 
        '/blog/aztec-and-maya-civilizations-for-kids',
        // Add your other 14 paths here
      ],
      // This ensures it waits for your JS to finish before taking the "snapshot"
      renderer: '@prerenderer/renderer-puppeteer', 
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve('./src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [
        '@babel/parser',
        '@babel/traverse',
        '@babel/generator',
        '@babel/types'
      ]
    }
  }
});
