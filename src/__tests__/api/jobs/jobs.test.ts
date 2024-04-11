import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import { jobsMock } from "../mocks/jobs.mock";
import handler from '../../../pages/api/jobs';
require('dotenv').config({ path: '.env.local' });

describe('/api/jobs', () => {

    it('Should return 401 Unauthorized when the request is made with a different secret', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        headers: {
          secret: 'wrong-secret'
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(401);
    });
  
    it('Should return 401 Unauthorized when the request is made with a blank secret', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        headers: {
          secret: '',
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(401);
    });

    it('Should return 400 Bad Request when the method is not allowed', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'POST', 
        headers: {
          secret: process.env.SECRET_KEY
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(400);
    });
  
    it('Should return 200 OK when the request is made with a valid secret', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        headers: {
          secret: process.env.SECRET_KEY
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(200);
    });
  
    it('Should return 200 OK and the information should be identical to the mock', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        headers: {
          secret: process.env.SECRET_KEY
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(200);
      expect(res._getData()).toBe(JSON.stringify(jobsMock));
    });
  
    it('Should return 200 OK and the information should be identical to the mock when the passed query parameters are correct.', async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        query: {
          level: 'SENIOR',
        },
        headers: {
          secret: process.env.SECRET_KEY
        }
      });
  
      await handler(req, res);
  
      expect(res._getStatusCode()).toBe(200);
      expect(res._getData()).toBe(JSON.stringify(jobsMock.filter(job => job.level === 'Senior')));
    });

    it('Should return 200 OK and all jobs when an invalid level query parameter is provided', async () => {

      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: 'GET', 
        query: { status: 'open' }, 
        headers: { secret: process.env.SECRET_KEY }
      });

      await handler(req, res);

      expect(res._getStatusCode()).toBe(200);
  
      expect(res._getData()).toBe(JSON.stringify(jobsMock));
    });
  
  
  });