export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = newUser => {
  return {
    type: ADD,
    payload: newUser,
  };
};

export const deleteUser = userId => {
  return {
    type: DELETE,
    payload: userId,
  };
};
