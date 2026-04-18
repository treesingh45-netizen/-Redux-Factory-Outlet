import * as https from 'https';
import * as fs from 'fs';

const url = 'https://www.clipartmax.com/png/middle/115-1150106_this-free-clip-arts-design-of-rx-logo-rx-logo-in-red.png';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
  }
};

https.get(url, options, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('src/assets/logo.png');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  } else {
    console.log('Failed to download: ' + res.statusCode);
  }
});
