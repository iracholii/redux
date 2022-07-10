export const FILTER_TEXT_CHANGE = 'USERS/FILTER_TEXT_CHANGE';

export const filterTextChange = text => ({
  type: FILTER_TEXT_CHANGE,
  payload: { text },
});
