import fs from 'fs';
import express from 'express';
import path from 'path';
import sharp from 'sharp';

const getImageFile = async (req: any, res: express.Response, next: express.NextFunction) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width, 10);
  const height = parseInt(req.query.height, 10);

  const fullImageFilepath = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../images/thumb', `${filename}.jpg`);

  try {
    fs.accessSync(thumbImageFilepath, fs.constants.F_OK);
    next();
  } catch(err) {
    const imageBuffer = await sharp(fullImageFilepath)
      .resize(width, height)
      .toBuffer();

    fs.writeFile(thumbImageFilepath, imageBuffer, (error) => {
      if (error) {
        res.end(error);
      }
      next();
    });
  }
}

export default getImageFile;