const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const activeFiles = [
  'weddings/DSC06118.jpg',
  'weddings/DSC02675-Enhanced-NR.jpg',
  '360 photobooth/360.jpg',
  'party/DSC08496.jpg',
  'promos/DSC08009.jpg',
  'food/DSC01323-Enhanced-NR.jpg',
  'gatherings/DSC01124-Enhanced-NR.jpg',
  'promos/DSC01288-Enhanced-SR.jpg',
  'gatherings/DSC07840.jpg',
  'promos/DSC00842-Enhanced-NR.jpg',
  'food/DSC01326-Enhanced-NR.jpg',
  'party/DSC08699.jpg',
  'weddings/DSC07053.jpg'
];

const basePath = path.join(__dirname, 'src', 'assets');

async function optimizeImages() {
  for (const file of activeFiles) {
    const inputPath = path.join(basePath, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping: ${file} (Not found)`);
      continue;
    }
    
    // Output file replaces .jpg extension with .webp
    const outputPath = path.join(basePath, file.replace('.jpg', '-optimized.webp'));
    console.log(`Optimizing: ${file}...`);

    try {
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✅ Success: Saved to ${outputPath}`);
    } catch (err) {
      console.error(`❌ Failed to optimize ${file}: ${err.message}`);
    }
  }
}

optimizeImages().then(() => console.log("Done optimization."));
