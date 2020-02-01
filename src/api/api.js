import Sendsay from 'sendsay-api';

export let api;

export const initApi = () => {
  api =  new Sendsay({
    apiKey: '18Wf7IhCzdrT7KVUda50alK5H1e5tpE24o0wCrHahDsqB1db8nruB5dDRD6juoZXP2x9Ts-8OoWx7J0hWPg'
  })

  const testRequest = { 
    action: 'sys.settings.get',
    list: ['about.id']
  }
  api.request(testRequest)
    .then(res => {
      console.log(res);
    })

  return api
};
