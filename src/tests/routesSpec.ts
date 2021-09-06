import supertest from 'supertest';
import app from '../index';

describe('Test images endpoint response', async () => {
  const request = supertest(app);
  const response = await request.get('/api?filename=santamonica&width=200&height=200');
  it('gets the api endpoint', () => {
    expect(response.status).toBe(200);
  });
});
