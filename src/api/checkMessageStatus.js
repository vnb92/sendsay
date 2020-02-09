import { api } from './api';

export const checkMessageStatus = async (id) => {
  const options = {
    action: 'track.get',
    id,
  };

  const response = await api.request(options);

  console.log(response);
  return response.obj.status;
};
