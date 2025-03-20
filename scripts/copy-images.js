import shell from 'shelljs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination paths
const sourcePath = path.join(__dirname, '..', 'public', 'images');
const destPath = path.join(__dirname, '..', 'client', 'src', 'images');

// Create destination directory if it doesn't exist
shell.mkdir('-p', destPath);

// Copy all files from public/images to src/images
shell.cp('-R', `${sourcePath}/*`, destPath);

console.log('Images copied successfully from public/images to src/images');