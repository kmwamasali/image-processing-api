import path from 'path';
import sharp from 'sharp';

/*
* @description Compresses an image in folder file from url endpoint request object
* @callback next
* @param {string} imagePath
* @param {number} width
* @param {number} height
* returns the callback function to move on to the next step of the endpoint request
*/
const resizeImage = async (filename: string, width: number, height: number) => {
  const fullImageFilepath = path.join(__dirname, '../../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../../images/thumb', `${filename}-${width}-${height}.jpg`);

  await sharp(fullImageFilepath)
      .resize(width, height)
      .toFile(thumbImageFilepath);
}

export default resizeImage;