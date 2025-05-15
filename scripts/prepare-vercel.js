const shell = require('shelljs');
const path = require('path');

console.log('Preparing static assets for Vercel deployment...');

// Create required directories if they don't exist
shell.mkdir('-p', 'dist/public/images/profile');
shell.mkdir('-p', 'dist/public/images/certificates');
shell.mkdir('-p', 'dist/public/certificates/Meta');
shell.mkdir('-p', 'dist/public/certificates/Microsoft');

// Copy profile images directly to the output directory
console.log('Copying profile images...');
shell.cp('-R', 'public/images/profile/*.jpg', 'dist/public/images/profile/');

// Copy certificate images
console.log('Copying certificate images...');
shell.cp('-R', 'public/images/certificates/**/*.jpg', 'dist/public/images/certificates/');
shell.cp('-R', 'public/certificates/**/*.jpg', 'dist/public/certificates/');

console.log('Static assets prepared for Vercel deployment successfully!');