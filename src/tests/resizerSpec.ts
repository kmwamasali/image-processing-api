import fs from 'fs';
import path from 'path';
import resizeImage from '../util/resizer';

describe('Test the image resize function', () => {
  const filename = 'fjord';
  const width = 200;
  const height = 200;
  const fullImageFilepath = path.join(__dirname, '../../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../../images/thumb', `${filename}-${width}-${height}.jpg`);
  it('should resize image passed to the function', async () => {
    await resizeImage(fullImageFilepath, width, height);
    fs.accessSync(thumbImageFilepath, fs.constants.F_OK)
    
    expect('output').toBeTruthy();
  })
})