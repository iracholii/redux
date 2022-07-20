import { SHOW_SPINNER, USER_DATA_RECEIVED } from './users.actions';

const initialState = { isFetching: false, userData: null };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECEIVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
  }
};

export default usersReducer;
