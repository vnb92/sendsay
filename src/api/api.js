import Sendsay from 'sendsay-api';

export let api;

export const initApi = () => {
  api =  new Sendsay({
    auth: {
      login: 'bogatyrev_vl@mail.ru', 
      password: 'nu4Saequee',     
    }
  })

  api.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res) {
    console.log(res.list['about.id']);
  })

  return api
};
