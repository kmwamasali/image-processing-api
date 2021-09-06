import fs from 'fs';
import express from 'express';
import path from 'path';
import sharp from 'sharp';

/*
* @description Compresses an image in folder file from url endpoint request object
* @callback next
* @param {Object} request
* @param {Object} response
* returns the callback function to move on to the next step of the endpoint request
*/
const compressImageFile = async (req: any, res: express.Response, next: express.NextFunction) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width, 10);
  const height = parseInt(req.query.height, 10);

  const fullImageFilepath = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../images/thumb', `${filename}-${width}-${height}.jpg`);

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

export default compressImageFile;