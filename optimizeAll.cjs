const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const basePath = path.join(__dirname, 'src', 'assets');
const specificFolders = ['weddings', 'party', 'openings', 'corporate', 'gatherings', '360 photobooth'];

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const optimizedName = file.replace(/\.jpeg$/i, '.webp').replace(/\.jpg$/i, '-optimized.webp');
      const outputPath = path.join(dir, optimizedName);
      
      if (!fs.existsSync(outputPath)) {
        console.log(`Optimizing: ${file}...`);
        try {
          await sharp(fullPath)
            .resize({ width: 1200, withoutEnlargement: true }) // Balanced for gallery lightbox
            .webp({ quality: 75 })
            .toFile(outputPath);
          console.log(`✅ Success: Saved to ${outputPath}`);
        } catch (err) {
          console.error(`❌ Failed to optimize ${file}: ${err.message}`);
        }
      } else {
        console.log(`⏭️ Already optimized: ${file}`);
      }
    }
  }
}

async function optimizeAll() {
  for (const folder of specificFolders) {
    const folderPath = path.join(basePath, folder);
    if (fs.existsSync(folderPath)) {
      console.log(`\nProcessing folder: ${folder}...`);
      await processDirectory(folderPath);
    }
  }
}

optimizeAll().then(() => console.log("\nDone all optimizations."));
