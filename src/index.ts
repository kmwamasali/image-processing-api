import express from 'express';
import morgan from 'morgan';
import router from './routes/routes';

const port = 8000;
const app = express();

app.use(morgan('tiny'));

app.use('/api', router);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

export default app;
