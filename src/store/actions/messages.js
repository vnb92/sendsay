import * as C from '../constants';

export const addTrack = (payload) => ({
  type: C.ADD_TRACK,
  payload,
});

export const updateTrackStatus = (payload) => ({
  type: C.UPDATE_TRACK_STATUS,
  payload,
});
