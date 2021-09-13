import sharp from 'sharp';

/*
* @description Compresses an image in folder file from url endpoint request object
* @callback next
* @param {string} imagePath
* @param {number} width
* @param {number} height
* returns the callback function to move on to the next step of the endpoint request
*/
const resizeImage = async (imagePath: string, width: number, height: number) => {
  const imageBuffer = await sharp(imagePath)
      .resize(width, height)
      .toBuffer();

  return imageBuffer;
}

export default resizeImage;