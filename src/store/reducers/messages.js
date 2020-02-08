const defaultState = [];

export const messages = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
};
