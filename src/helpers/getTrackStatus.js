export const getTrackStatus = trackStatus => {
  const status = Number(trackStatus);
  const allowedStatuses = {
    pending: 'pending',
    succsess: 'succsess',
    error: 'error',
  };

  if (status === -1) return allowedStatuses.succsess;
  if (status < -1) return allowedStatuses.error;
  if (status > -1) return allowedStatuses.pending;

  return 'status of track not found';
};
