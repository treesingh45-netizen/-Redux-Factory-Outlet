import * as fs from 'fs';
const data = fs.readFileSync('public/logo.jpg');
console.log('Size:', data.length);
if (data.length < 50000) {
  console.log('Base64:', data.toString('base64').substring(0, 100) + '...');
}
