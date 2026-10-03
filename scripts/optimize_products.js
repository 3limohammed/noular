import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const productsDir = path.resolve('public/assets/noular/products');

async function optimize() {
  console.log('Starting optimization of products directory:', productsDir);

  const productFolders = fs.readdirSync(productsDir);

  for (const folder of productFolders) {
    const folderPath = path.join(productsDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    // Remove duplicate 'optimized' folder if present
    const duplicateOptimized = path.join(folderPath, 'optimized');
    if (fs.existsSync(duplicateOptimized)) {
      console.log(`Removing redundant duplicate folder: ${duplicateOptimized}`);
      fs.rmSync(duplicateOptimized, { recursive: true, force: true });
    }

    // Process images in 'original'
    const originalDir = path.join(folderPath, 'original');
    if (!fs.existsSync(originalDir)) continue;

    const files = fs.readdirSync(originalDir);
    for (const file of files) {
      const filePath = path.join(originalDir, file);
      const ext = path.extname(file).toLowerCase();
      const initialSize = fs.statSync(filePath).size;

      try {
        if (ext === '.png') {
          const buffer = await sharp(filePath)
            .resize({ width: 1400, withoutEnlargement: true })
            .png({ compressionLevel: 9, effort: 7 })
            .toBuffer();
          fs.writeFileSync(filePath, buffer);
          const newSize = buffer.length;
          console.log(`PNG ${folder}/${file}: ${(initialSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024/1024).toFixed(2)}MB`);
        } else if (ext === '.jpg' || ext === '.jpeg') {
          const buffer = await sharp(filePath)
            .resize({ width: 1600, withoutEnlargement: true })
            .jpeg({ quality: 85, mozjpeg: true })
            .toBuffer();
          fs.writeFileSync(filePath, buffer);
          const newSize = buffer.length;
          console.log(`JPG ${folder}/${file}: ${(initialSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024/1024).toFixed(2)}MB`);
        }
      } catch (err) {
        console.error(`Error optimizing ${filePath}:`, err.message);
      }
    }
  }

  // Calculate final total size
  function getDirSize(d) {
    let total = 0;
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      const s = fs.statSync(p);
      if (s.isDirectory()) total += getDirSize(p);
      else total += s.size;
    }
    return total;
  }

  const finalTotal = getDirSize(productsDir);
  console.log(`\nOptimization Complete! New products directory total size: ${(finalTotal/1024/1024).toFixed(2)} MB`);
}

optimize().catch(console.error);
