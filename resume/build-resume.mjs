// Renders resume/resume.html to the PDF served by the site.
// Usage: node resume/build-resume.mjs  (requires Playwright + Chromium)
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${path.join(dir, 'resume.html')}`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: path.join(dir, '../src/assets/MaxShapovalov_Resume.pdf'),
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log('Wrote src/assets/MaxShapovalov_Resume.pdf');
