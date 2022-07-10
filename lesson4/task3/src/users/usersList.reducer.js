import users from './users';
import { PREVIOUS_PAGE, NEXT_PAGE } from './usersList.actions';

const initialState = {
  usersList: users,
  currentPage: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case PREVIOUS_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }

    case NEXT_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
  }
};

export default usersReducer;
