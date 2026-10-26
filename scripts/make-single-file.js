import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const htmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');
const assetsDir = path.join(distDir, 'assets');

// Find CSS file
const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
if (cssFiles.length > 0) {
  const cssContent = fs.readFileSync(path.join(assetsDir, cssFiles[0]), 'utf8');
  // Replace link tag with style tag
  html = html.replace(
    new RegExp(`<link[^>]*href=["']\\.?/?assets/${cssFiles[0]}["'][^>]*>`, 'i'),
    `<style>\n${cssContent}\n</style>`
  );
}

// Find JS file
const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
if (jsFiles.length > 0) {
  let jsContent = fs.readFileSync(path.join(assetsDir, jsFiles[0]), 'utf8');
  // Escape any occurrences of </script> in strings
  jsContent = jsContent.replace(/<\/script>/gi, '<\\/script>');
  // Replace script tag with inline script
  html = html.replace(
    new RegExp(`<script[^>]*src=["']\\.?/?assets/${jsFiles[0]}["'][^>]*></script>`, 'i'),
    `<script type="module">\n${jsContent}\n</script>`
  );
}

// Save standalone file in dist and in root as standalone_index.html
const standaloneDistPath = path.join(distDir, 'index.html');
const standaloneRootPath = path.resolve('standalone_index.html');

fs.writeFileSync(standaloneDistPath, html, 'utf8');
fs.writeFileSync(standaloneRootPath, html, 'utf8');

console.log('Successfully created standalone single-file index.html!');
console.log('1. dist/index.html (Single-file version, no external assets needed)');
console.log('2. standalone_index.html (Saved in project root)');
