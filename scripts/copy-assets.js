const shell = require('shelljs');
const path = require('path');

// Ensure the server/public directory exists
shell.mkdir('-p', 'server/public');

// Copy all built assets from dist/public to server/public
shell.cp('-R', 'dist/public/*', 'server/public/');

console.log('Static assets copied successfully to server/public directory');
