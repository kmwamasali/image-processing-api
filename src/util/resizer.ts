import sharp from 'sharp';

const resizeImage = async (imagePath: string, width: number, height: number) => {
  const imageBuffer = await sharp(imagePath)
      .resize(width, height)
      .toBuffer();

  return imageBuffer;
}

export default resizeImage;