import supertest from 'supertest';
import app from '../index';
import router from '../routes/routes';

describe('Test images endpoint response', async () => {
  app.use('/api', router);
  const request = supertest(app);
  const response = await request.get('/api/images?filename=fjord&width=200&height=200');

  it('gets the api endpoint', () => {
    expect(response.status).toBe(200);
  });
});
