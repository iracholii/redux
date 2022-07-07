import { SET } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    default:
      return state;
    case SET:
      return action.payload.language;
  }
};

export default languageReducer;
