import fs from 'fs';
import path from 'path';
import fileExists from '../util/fileExists';
import logInput from '../util/logger';
import resizeImage from '../util/resizer';

describe('Test the image resize function', () => {
  const filename = 'fjord';
  const width = 200;
  const height = 200;
  const expectedImageFilepath = path.join(__dirname, '../../images/thumb', `${filename}-${width}-${height}.jpg`);

  afterAll(() => {
    try {
      fs.unlinkSync(expectedImageFilepath);
      logInput(`${filename} was removed successfully`);
    } catch(err) {
      logInput(err)
    }
  });

  it('should resize image passed to the function', async () => {
    await resizeImage(filename, width, height);
    const isFilePresent = fileExists(expectedImageFilepath);

    expect(isFilePresent).toBeTruthy();
  })
})