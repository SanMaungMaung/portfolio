import shell from 'shelljs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure the server/public directory exists
shell.mkdir('-p', 'server/public');

// Copy all built assets from dist/public to server/public
shell.cp('-R', 'dist/public/*', 'server/public/');

console.log('Static assets copied successfully to server/public directory');