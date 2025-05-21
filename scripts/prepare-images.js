const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

// Log start of process
console.log('Preparing image assets for build...');

// Create necessary directories in the build output
function createDirectories() {
  console.log('Creating directories...');
  
  // Make sure the public directory exists in the build output
  shell.mkdir('-p', 'dist/public/images/profile');
  shell.mkdir('-p', 'dist/public/images/certificates/Meta');
  shell.mkdir('-p', 'dist/public/images/certificates/Microsoft');
  shell.mkdir('-p', 'dist/public/certificates/Meta');
  shell.mkdir('-p', 'dist/public/certificates/Microsoft');
}

// Copy all image assets from public to build output
function copyImageAssets() {
  console.log('Copying image assets...');
  
  // Copy profile images
  shell.cp('-R', 'public/images/profile/*.jpg', 'dist/public/images/profile/');
  
  // Copy certificate images from both locations (for fallback)
  shell.cp('-R', 'public/images/certificates/Meta/*.jpg', 'dist/public/images/certificates/Meta/');
  shell.cp('-R', 'public/images/certificates/Microsoft/*.jpg', 'dist/public/images/certificates/Microsoft/');
  shell.cp('-R', 'public/certificates/Meta/*.jpg', 'dist/public/certificates/Meta/');
  shell.cp('-R', 'public/certificates/Microsoft/*.jpg', 'dist/public/certificates/Microsoft/');
}

// Execute the preparation functions
function main() {
  createDirectories();
  copyImageAssets();
  console.log('Image assets preparation complete!');
}

main();