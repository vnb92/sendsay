import Sendsay from 'sendsay-api';
import { config } from '../appConfig';

export const initApi = () => {
  const api = new Sendsay({ apiKey: config.API_KEY });

  const testRequest = {
    action: 'sys.settings.get',
    list: ['about.id'],
  };

  api
    .request(testRequest)
    .then(res => console.log(res));

  return api;
};

export const api = initApi();
