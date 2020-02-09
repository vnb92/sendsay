import Sendsay from 'sendsay-api';
import { ENV } from '../config';

export const initApi = () => {
  const api = new Sendsay({
    apiKey: ENV.API_KEY,
  });

  return api;
};

export const api = initApi();
