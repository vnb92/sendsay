import * as C from '../constants';

export const resetForm = () => ({
  type: C.RESET_FORM,
});

export const setIsPending = (payload) => ({
  type: C.SET_IS_PENDING,
  payload,
});

export const inputNameSender = (payload) => ({
  type: C.INPUT_NAME_FROM,
  payload,
});

export const inputEmailSender = (payload) => ({
  type: C.INPUT_EMAIL_FROM,
  payload,
});

export const inputNameRecipient = (payload) => ({
  type: C.INPUT_NAME_TO,
  payload,
});

export const inputEmailRecipient = (payload) => ({
  type: C.INPUT_EMAIL_TO,
  payload,
});

export const inputTopic = (payload) => ({
  type: C.INPUT_TOPIC,
  payload,
});

export const inputMessage = (payload) => ({
  type: C.INPUT_MESSAGE,
  payload,
});

export const addFile = (payload) => ({
  type: C.ADD_FILE,
  payload,
});

export const removeFile = (payload) => ({
  type: C.REMOVE_FILE,
  payload,
});

export const setFormErrors = (payload) => ({
  type: C.SET_FORM_ERRORS,
  payload,
});

export const unsetFormErrors = (payload) => ({
  type: C.UNSET_FORM_ERRORS,
  payload,
});
