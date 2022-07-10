import users from './users';
import { FILTER_TEXT_CHANGE } from './users.actions';

const initialState = {
  filterText: '',
  usersList: users,
  filteredList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        filteredList: state.usersList,
      };

    case FILTER_TEXT_CHANGE: {
      const { text } = action.payload;

      const filteredList = state.usersList.filter(user =>
        user.name.toLowerCase().includes(text.toLowerCase()),
      );

      return {
        ...state,
        filterText: action.payload.text,
        filteredList,
      };
    }
  }
};

export default usersReducer;
