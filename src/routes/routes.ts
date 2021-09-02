import fs from 'fs';
import express from 'express';
import path from 'path';
import sharp from 'sharp';

const router = express.Router();

const getImageFile = async (req: any, res: express.Response, next: express.NextFunction) => {
  const { filename } = req.query;
  const width = parseInt(req.query.width, 10);
  const height = parseInt(req.query.height, 10);

  const fullImageFilepath = path.join(__dirname, '../images/full', `${filename}.jpg`);
  const thumbImageFilepath = path.join(__dirname, '../images/thumb', `${filename}.jpg`);

  fs.access(thumbImageFilepath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.end('Image does not exist');
    }
    return next();
  });

  const imageBuffer = await sharp(fullImageFilepath)
    .resize(width, height)
    .toBuffer();

  fs.writeFile(thumbImageFilepath, imageBuffer, (err) => {
    if (err) {
      return res.send(err);
    }
    return next();
  });
}

router.get('/images', getImageFile, (req, res) => {
  const { filename } = req.query;

  const imageFilepath = path.join(__dirname, '../images/thumb', `${filename}.jpg`);
  res.sendFile(imageFilepath);
});

export default router;