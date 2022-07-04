import { ADD, DELETE } from './users.actions.js';

const initialState = { usersList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
