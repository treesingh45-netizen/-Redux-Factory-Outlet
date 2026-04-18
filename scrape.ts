import * as https from 'https';

const url = 'https://www.clipartmax.com/middle/m2i8Z5b1Z5i8i8A0_this-free-clip-arts-design-of-rx-logo-rx-logo-in-red/';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/<img[^>]*src="([^"]+)"/g);
    if (matches) {
        for(const m of matches) {
            console.log(m);
        }
    }
  });
});
