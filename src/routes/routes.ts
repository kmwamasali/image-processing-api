import express from 'express';

const router = express.Router();

router.get('/images', (req, res) => {
  res.send('images url endpoint');
});

export default router;