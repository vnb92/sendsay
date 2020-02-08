import * as C from '../constants';

const defaultState = {
  sender: {
    name: 'dfgd',
    email: 'fsfs@mail.ru',
  },
  recipient: {
    name: 'sdads',
    email: 'dfsfsgs@mail.ru',
  },
  topic: 'dfddddd',
  message: 'fsfsfsfsfs',
  files: [],
};

export const form = (state = defaultState, { type, payload }) => {
  switch (type) {
    case C.INPUT_NAME_FROM:
      return {
        ...state,
        sender: {
          ...state.sender,
          name: payload,
        },
      };

    case C.INPUT_EMAIL_FROM:
      return {
        ...state,
        sender: {
          ...state.sender,
          email: payload,
        },
      };

    case C.INPUT_NAME_TO:
      return {
        ...state,
        recipient: {
          ...state.recipient,
          name: payload,
        },
      };

    case C.INPUT_EMAIL_TO:
      return {
        ...state,
        recipient: {
          ...state.recipient,
          email: payload,
        },
      };

    case C.INPUT_TOPIC:
      return {
        ...state,
        topic: payload,
      };

    case C.INPUT_MESSAGE:
      return {
        ...state,
        message: payload,
      };

    case C.ADD_FILE:
      return {
        ...state,
        files: [...state.files, payload],
      };

    case C.REMOVE_FILE:
      return {
        ...state,
        files: state.files.filter(
          file => file.name !== payload,
        ),
      };

    default:
      return state;
  }
};
