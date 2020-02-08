import { api } from './api';

export const sendMessage = ({
  topic, sender, recipient, message, files,
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

  api.request(options)
    .then(res => { console.log(res); });
};
