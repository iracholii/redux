export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = userData => ({
  type: ADD,
  payload: { userData },
});

export const deleteUser = userId => ({
  type: DELETE,
  payload: { userId },
});
