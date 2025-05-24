import fs from 'fs';
import path from 'path';
import shelljs from 'shelljs';

// Log start of process
console.log('Preparing image assets for build...');

// Create necessary directories in the build output
function createDirectories() {
  console.log('Creating directories...');
  
  // Make sure the public directory exists in the build output
  shelljs.mkdir('-p', 'dist/public/public/images/profile');
  shelljs.mkdir('-p', 'dist/public/public/images/certificates/Meta');
  shelljs.mkdir('-p', 'dist/public/public/images/certificates/Microsoft');
  shelljs.mkdir('-p', 'dist/public/public/certificates/Meta');
  shelljs.mkdir('-p', 'dist/public/public/certificates/Microsoft');
}

// Copy all image assets from public to build output
function copyImageAssets() {
  console.log('Copying image assets...');
  
  // Copy profile images - make sure zprofile.jpg is copied
  shelljs.cp('-R', 'public/images/profile/*.jpg', 'dist/public/public/images/profile/');
  
  // Ensure profile image exists, if not try attached_assets
  if (!fs.existsSync('dist/public/public/images/profile/zprofile.jpg')) {
    console.log('Profile image not found in public folder, checking attached_assets...');
    if (fs.existsSync('attached_assets/54113232300.jpg')) {
      console.log('Found profile image in attached_assets, copying...');
      shelljs.cp('attached_assets/54113232300.jpg', 'dist/public/public/images/profile/zprofile.jpg');
    }
  }
  
  // Copy certificate images from both locations (for fallback)
  shelljs.cp('-R', 'public/images/certificates/Meta/*.jpg', 'dist/public/public/images/certificates/Meta/');
  shelljs.cp('-R', 'public/images/certificates/Microsoft/*.jpg', 'dist/public/public/images/certificates/Microsoft/');
  shelljs.cp('-R', 'public/certificates/Meta/*.jpg', 'dist/public/public/certificates/Meta/');
  shelljs.cp('-R', 'public/certificates/Microsoft/*.jpg', 'dist/public/public/certificates/Microsoft/');
  
  // Copy certificate images from attached_assets if needed
  const certificateFiles = [
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0002.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0003.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0004.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0005.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0006.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0007.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Meta Front-End Developer Pro_page-0008.jpg', dest: 'dist/public/public/images/certificates/Meta/' },
    { src: 'attached_assets/Microsoft UX Design Pro_page-0001.jpg', dest: 'dist/public/public/images/certificates/Microsoft/' },
    { src: 'attached_assets/Microsoft UX Design Pro_page-0002.jpg', dest: 'dist/public/public/images/certificates/Microsoft/' },
    { src: 'attached_assets/Microsoft UX Design Pro_page-0003.jpg', dest: 'dist/public/public/images/certificates/Microsoft/' }
  ];
  
  // Copy each certificate file if it exists
  certificateFiles.forEach(file => {
    if (fs.existsSync(file.src)) {
      const filename = path.basename(file.src);
      shelljs.cp(file.src, file.dest + filename);
    }
  });
}

// Execute the preparation functions
function main() {
  createDirectories();
  copyImageAssets();
  console.log('Image assets preparation complete!');
}

main();