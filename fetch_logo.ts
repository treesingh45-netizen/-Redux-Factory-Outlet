import * as https from 'https';
import * as fs from 'fs';

const url = 'https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/300435009_439088118240424_3885111096514371410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=mAB2Gvt0wLgQ7kNvwGi8067&_nc_oc=Adp7K-ZUKRZYb8rKixer7vhNPvpxmTVomWpj-d9btQ9zAx_QaA9w4jz8WthHR_moVCA&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=jMHuj1LWvfOGMXHNaEZ4Bw&_nc_ss=7a389&oh=00_Af3zBLxCcRIYFAYQlMQdI1uYnLvGUgj6BWEW0Gdrlw95SQ&oe=69E99C80';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('src/assets/logo.jpg');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  } else {
    console.log('Failed to download: ' + res.statusCode);
  }
});
