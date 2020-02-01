import Sendsay from 'sendsay-api';
import { config } from '../appConfig';

export let api;

export const initApi = () => {
  api =  new Sendsay({ apiKey: config.API_KEY });

  const testRequest = { 
    action: 'sys.settings.get',
    list: ['about.id']
  }

  api
    .request(testRequest)
    .then(res => console.log(res));

  return api
};
