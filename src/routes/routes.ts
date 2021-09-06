import express from 'express';
import path from 'path';
import getImageFile from '../middleware/compression';

const router = express.Router();

router.get('/images', getImageFile, (req, res) => {
  const { filename, width, height } = req.query;

  const imageFilepath = path.join(__dirname, '../images/thumb', `${filename}-${width}-${height}.jpg`);
  res.sendFile(imageFilepath);
});

export default router;