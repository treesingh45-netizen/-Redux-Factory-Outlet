import * as https from 'https';
import * as fs from 'fs';

const url = 'https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/300435009_439088118240424_3885111096514371410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=mAB2Gvt0wLgQ7kNvwE5ZU21&_nc_oc=Adp4wQRMurm92vk3sNmjdagOJALco5qvVooiCDf26q_4l6st3fhc2Ll0wSOdWAxK2Lw&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=zA9Ti1Ej7afpr763K23h1Q&_nc_ss=7a389&oh=00_Af3JNc7PvG8NFNmoOGq_-WamjKBNe-p8wZZHz0ROGAiNYw&oe=69E96440';

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('public/logo.jpg');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download complete');
    });
  } else {
    console.log('Failed to download: ' + res.statusCode);
  }
});
