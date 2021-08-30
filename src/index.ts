import express from 'express';
import router from './routes/routes';

const port = 8000;
const app = express();

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello image processing api');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

export default app;
