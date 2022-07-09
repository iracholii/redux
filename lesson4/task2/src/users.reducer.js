import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData],
      };

    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
  }
};

export default usersReducer;
