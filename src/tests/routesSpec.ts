import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test images endpoint response', () => {
  it('gets the image api endpoint', async () => {
    const response = await request.get('/api/images?filename=fjord&width=200&height=200');

    expect(response.status).toBe(200);
  });

  it('sends a 400 response if url image name is invalid', async () => {
    const response = await request.get('/api/images?filename=fj&width=200&height=200');

    expect(response.status).toBe(400);
  });
});
