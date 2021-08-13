import request from 'request';
import fs from 'fs';

const urls = [
  'https://www.olimpiadatododia.com.br/wp-content/uploads/2021/06/Filipe-Toledo-etapa-do-surf-ranch-do-mundial-de-surfe.jpeg',
  'https://hardcore.com.br/wp-content/uploads/sites/2/2020/04/italo.jpeg',
];

async function download(): Promise<void> {
  const { log } = console;

  Object.entries(urls).forEach(async ([id, url]) => {
    request(url)
      .on('complete', () => {
        log('Completed');
      })
      .on('error', err => {
        log(`Error: ${err}`);
      })
      .pipe(fs.createWriteStream(`assets/downloaded-${id}.jpeg`));
  });
}

download();
