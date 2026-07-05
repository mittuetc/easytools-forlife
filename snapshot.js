/* import fs from 'fs';
import puppeteer from 'puppeteer';

const routes = ['/', '/blog/aztec-and-maya-civilizations-for-kids', '/nature-explorer', '/space-adventure', '/ocean-explorer', '/time-travelers', '/creative-corner', '/unscrambler', '/translator', '/comics', '/blog/mind-blowing-space-facts', '/blog/why-kids-should-learn-languages', '/blog/ocean-facts-for-kids', '/blog/how-egyptians-built-the-pyramids', '/blog/why-comics-are-good-for-kids', '/blog/ancient-china-inventions', '/blog/word-unscrambler-tips-for-kids', '/blog/ancient-greece-facts-for-kids', '/blog/animals-with-superpowers', '/time-travelers/egypt', '/time-travelers/greece', '/time-travelers/china', '/ime-travelers/aztec-maya', '/time-travelers/rome',]; 

// Use a variable for the port, default to 3000 if not provided
const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

async function snapshot() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();


  for (const route of routes) {
    // Visit your local dev server
    //await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
    
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
    // Get the final, finished HTML
    const html = await page.content();
    
    const dir = `./dist${route}`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(`${dir}/index.html`, html);
    console.log(`Snapshot saved for: ${route}`);
  }
  await browser.close();
}

snapshot();
 */

import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';

// Define your routes
const routes = ['/', '/blog/aztec-and-maya-civilizations-for-kids', '/nature-explorer', '/space-adventure', '/ocean-explorer', '/time-travelers', '/creative-corner', '/unscrambler', '/translator', '/comics', '/blog/mind-blowing-space-facts', '/blog/why-kids-should-learn-languages', '/blog/ocean-facts-for-kids', '/blog/how-egyptians-built-the-pyramids', '/blog/why-comics-are-good-for-kids', '/blog/ancient-china-inventions', '/blog/word-unscrambler-tips-for-kids', '/blog/ancient-greece-facts-for-kids', '/blog/animals-with-superpowers', '/time-travelers/egypt', '/time-travelers/greece', '/time-travelers/china', '/time-travelers/aztec-maya', '/time-travelers/rome',];

async function snapshot() {
  for (const route of routes) {
    // 1. Remove the leading '/' if it exists, so path.join works correctly
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;

    // 2. Construct the path: dist/ + (route or index.html)
    const filePath = path.join(process.cwd(), 'dist', cleanRoute, cleanRoute === '' ? 'index.html' : 'index.html');

    // 3. Verify the file exists before trying to read it
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found, skipping: ${filePath}`);
      continue;
    }
    
    // Use JSDOM to load the HTML
    const dom = await JSDOM.fromFile(filePath, { runScripts: "dangerously", resources: "usable" });
    
    // Capture the finished HTML
    const html = dom.serialize();
    
    // Save it back
    fs.writeFileSync(filePath, html);
    console.log(`Snapshot saved for: ${route}`);
  }
}

snapshot();