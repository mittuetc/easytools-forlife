import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// All routes that need their own index.html
const routes = [
  '/blog',
  '/blog/mind-blowing-space-facts',
  '/blog/why-kids-should-learn-languages',
  '/blog/ocean-facts-for-kids',
  '/blog/how-egyptians-built-the-pyramids',
  '/blog/why-comics-are-good-for-kids',
  '/blog/ancient-china-inventions',
  '/blog/word-unscrambler-tips-for-kids',
  '/blog/ancient-greece-facts-for-kids',
  '/blog/animals-with-superpowers',
  '/blog/aztec-and-maya-civilizations-for-kids',
  '/nature-explorer',
  '/space-adventure',
  '/ocean-explorer',
  '/time-travelers',
  '/time-travelers/egypt',
  '/time-travelers/greece',
  '/time-travelers/china',
  '/time-travelers/aztec-maya',
  '/time-travelers/rome',
  '/creative-corner',
  '/unscrambler',
  '/translator',
  '/comics',
  '/daily-comic',
  '/comic-series',
  '/terms',
  '/privacy',
];

function snapshot() {
  for (const route of routes) {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    const dir = path.join(distDir, cleanRoute);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, 'index.html');
    fs.writeFileSync(filePath, baseHtml);
    console.log(`Snapshot saved for: ${route}`);
  }
}

snapshot();
