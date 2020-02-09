import { api } from './api';

export const sendMessage = async ({
  topic,
  sender,
  recipient,
  message,
  files,
}) => {
  const options = {
    action: 'issue.send.test',
    letter: {
      subject: topic,
      'from.name': sender.name,
      'from.email': sender.email,
      'to.name': recipient.name,
      message: { text: message },
      attaches: files,
    },
    sendwhen: 'test',
    mca: [recipient.email],
  };

  const response = await api.request(options);

  return response['track.id'];
};
