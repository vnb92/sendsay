import * as C from '../constants';

const defaultState = [];

export const messages = (state = defaultState, { type, payload }) => {
  switch (type) {
    case C.ADD_TRACK:
      return [...state, payload];

    case C.UPDATE_TRACK_STATUS:
      return state.map(track => {
        const updatedTrack = track.id === payload.id
          ? {
            ...track,
            status: payload.status,
          }
          : track;

        return updatedTrack;
      });

    default:
      return state;
  }
};
