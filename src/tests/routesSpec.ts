import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test images endpoint response', async () => {
  const response = await request.get('/api/images?filename=fjord&width=200&height=200');

  it('gets the image api endpoint', () => {

    expect(response.status).toBe(200);
  });
});
