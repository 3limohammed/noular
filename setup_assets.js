import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\الشبكة للحاسبات\\.gemini\\antigravity-ide\\scratch\\downloaded_noular_assets';
const destBase = 'C:\\Users\\الشبكة للحاسبات\\.gemini\\antigravity-ide\\scratch\\noular-ecommerce\\public\\assets\\noular';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy downloaded assets
console.log('Copying downloaded assets to public/assets/noular...');
copyRecursiveSync(srcDir, destBase);

// 2. Ensure all products have optimized folders mirrored
const products = ['warda-sienna', 'warda-basalt', 'warda-neige', 'warda-soleil'];
for (const p of products) {
  const origDir = path.join(destBase, 'products', p, 'original');
  const optDir = path.join(destBase, 'products', p, 'optimized');
  const cinDir = path.join(destBase, 'products', p, 'cinematic');
  fs.mkdirSync(optDir, { recursive: true });
  fs.mkdirSync(cinDir, { recursive: true });

  if (fs.existsSync(origDir)) {
    fs.readdirSync(origDir).forEach((file) => {
      fs.copyFileSync(path.join(origDir, file), path.join(optDir, file));
    });
  }
}

// 3. Create hero, cinematic, icons directories
fs.mkdirSync(path.join(destBase, 'hero'), { recursive: true });
fs.mkdirSync(path.join(destBase, 'cinematic'), { recursive: true });
fs.mkdirSync(path.join(destBase, 'icons'), { recursive: true });

console.log('Asset directory structure setup complete.');
