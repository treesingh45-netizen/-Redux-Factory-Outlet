import * as fs from 'fs';
fs.mkdirSync('src/assets', { recursive: true });
fs.renameSync('public/logo.jpg', 'src/assets/logo.jpg');
console.log('Moved logo to assets');
