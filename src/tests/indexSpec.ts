import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', async () => {
  const response = await request.get('/api');
  
  it('gets the api endpoint', () => {
      expect(response.status).toBe(200);
  }
)});