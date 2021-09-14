import express from 'express';
import path from 'path';
import logInput from '../util/logger';
import resizeImage from '../util/resizer';
import fileExists from '../util/fileExists';

/*
* @description Compresses an image in folder file from url endpoint request object
* @callback next
* @param {Object} request
* @param {Object} response
* returns the callback function to move on to the next step of the endpoint request
*/
type Query = {
  filename: string
  width: string
  height: string
}

interface Request {
  query: Query
}

const compressImageFile = async (req: Request, res: express.Response, next: express.NextFunction) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width, 10);
  const height = parseInt(req.query.height, 10);

  const fullImageFilepath = path.join(__dirname, '../../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../../images/thumb', `${filename}-${width}-${height}.jpg`);

  const fullImageExists = fileExists(fullImageFilepath);
  const thumbImageExists = fileExists(thumbImageFilepath);

  if (fullImageExists === false) {
    let message = `Image with file name: ${filename} does not exist. `;

    if (!width || !height) {
      message += `Invalid input parameters, height: ${height}, width: ${width}`;
    }

    res.statusCode = 400;
    return res.end(message);
  }

  if (thumbImageExists === true) {
    logInput(`IMAGE from file cache at ${thumbImageFilepath}`);
    next();
  } else {
    await resizeImage(filename, width, height);
    logInput(`CREATED image at ${thumbImageFilepath}`);
    next();
  }
}

export default compressImageFile;