const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const projects = [
  { name: 'abs', title: 'Automatic Billing System' },
  { name: 'ami', title: 'Advanced Metering Infrastructure' },
  { name: 'ecommerce', title: 'E-commerce Platform' },
  { name: 'ml', title: 'ML-Powered Content Generator' },
  { name: 'healthcare', title: 'Healthcare Portal UX Design' }
];

function createPlaceholder(text, filename) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#003366';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Break text into multiple lines if too long
  const words = text.split(' ');
  let lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < 700) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);

  // Draw text lines
  const lineHeight = 50;
  const startY = height/2 - (lines.length - 1) * lineHeight/2;
  lines.forEach((line, i) => {
    ctx.fillText(line, width/2, startY + i * lineHeight);
  });

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', `${filename}.png`), buffer);
}

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholders
projects.forEach(project => {
  createPlaceholder(project.title, project.name);
});

console.log('Placeholder images generated successfully!');
