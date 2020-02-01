import * as C from '../constants';

export const inputNameSender = (payload) => ({
  type: C.INPUT_NAME_FROM,
  payload,
});

export const inputEmailSender = (payload) => ({
  type: C.INPUT_EMAIL_FROM,
  payload,
})

export const inputNameRecipient = (payload) => ({
  type: C.INPUT_NAME_TO,
  payload,
})

export const inputEmailRecipient = (payload) => ({
  type: C.INPUT_EMAIL_TO,
  payload,
})

export const inputTopic = (payload) => ({
  type: C.INPUT_TOPIC,
  payload,
})

export const inputMessage = (payload) => ({
  type: C.INPUT_MESSAGE,
  payload,
})

export const addFile = (payload) => ({
  type: C.ADD_FILE,
  payload,
})

export const removeFile = (payload) => ({
  type: C.REMOVE_FILE,
  payload,
})
