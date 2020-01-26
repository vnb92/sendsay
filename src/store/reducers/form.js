import * as C from '../constants';

const defaultState = {
  sender: {
    name: '',
    email: '',
  },
  recipient: {
    name: '',
    email: ''
  },
  topic: '',
  message: '',
}

export const form = (state = defaultState, { type, payload }) => {
  switch (type) {
    case C.INPUT_NAME_FROM:
      return {
        ...state,
        sender: {
          ...state.sender,
          name: payload,
        }
      }

    case C.INPUT_EMAIL_FROM:
      return {
        ...state,
        sender: {
          ...state.sender,
          email: payload,
        }
      }

    case C.INPUT_NAME_TO:
      return {
        ...state,
        recipient: {
          ...state.recipient,
          name: payload,
        }
      }

    case C.INPUT_EMAIL_TO:
      return {
        ...state,
        recipient: {
          ...state.recipient,
          email: payload,
        }
      }

    case C.INPUT_TOPIC:
      return {
        ...state,
        topic: payload,
      }

    case C.INPUT_MESSAGE:
      return {
        ...state,
        message: payload,
      }

    default:
      return state
  }
}