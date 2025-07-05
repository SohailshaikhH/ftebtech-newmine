const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');
const fs = require('fs');

async function optimizeImages() {
  const inputDir = 'src/assets/images';
  const outputDir = 'src/assets/images/optimized';

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Optimize JPEG images
    await imagemin([`${inputDir}/**/*.{jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 85 }),
        imageminWebp({ quality: 85 })
      ]
    });

    // Optimize PNG images
    await imagemin([`${inputDir}/**/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({ quality: [0.8, 0.9] }),
        imageminWebp({ quality: 85 })
      ]
    });

    console.log('✅ Images optimized successfully!');
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    
    // Generate image manifest
    generateImageManifest(outputDir);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

function generateImageManifest(outputDir) {
  const manifest = {};
  
  function scanDirectory(dir, basePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath, path.join(basePath, file));
      } else {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const relativePath = path.join(basePath, file);
        
        if (!manifest[name]) {
          manifest[name] = {};
        }
        
        if (ext === '.webp') {
          manifest[name].webp = relativePath;
        } else {
          manifest[name].fallback = relativePath;
        }
      }
    });
  }
  
  scanDirectory(outputDir);
  
  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('📋 Image manifest generated:', manifestPath);
}

// Run optimization
optimizeImages();