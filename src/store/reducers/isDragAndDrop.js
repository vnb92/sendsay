import * as C from '../constants';

const defaultState = false;

export const isDragAndDrop = (state = defaultState, { type }) => {
  switch (type) {
    case C.SET_IS_DRAG:
      return true;

    case C.UNSET_IS_DRAG:
      return false;
    default:
      return state;
  }
};
