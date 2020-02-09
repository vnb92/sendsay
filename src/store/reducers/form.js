import * as C from '../constants';

const defaultErrors = {
  sender: {
    name: '',
    email: '',
  },
  recipient: {
    name: '',
    email: '',
  },
  topic: '',
  message: '',
  files: '',
};

const defaultState = {
  isPending: false,
  sender: {
    name: '',
    email: '',
  },
  recipient: {
    name: '',
    email: '',
  },
  topic: '',
  message: '',
  files: [],
  errors: {
    ...defaultErrors,
  },
};

export const form = (state = defaultState, { type, payload }) => {
  switch (type) {
    case C.RESET_FORM:
      return defaultState;

    case C.SET_IS_PENDING:
      return {
        ...state,
        isPending: payload,
      };

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

    case C.SET_FORM_ERRORS:
      return {
        ...state,
        errors: payload,
      };

    case C.UNSET_FORM_ERRORS:
      return {
        ...state,
        errors: defaultErrors,
      };

    default:
      return state;
  }
};
