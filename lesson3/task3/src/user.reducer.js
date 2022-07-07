import { SET, REMOVE } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;

    case SET:
      return action.payload.userData;

    case REMOVE:
      return null;
  }
};

export default userReducer;
