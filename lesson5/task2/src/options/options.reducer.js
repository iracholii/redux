import options from './optionsList';
import { TOGGLE_OPTION } from './options.actions';

const initialState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const updatedSelected = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : [...state.selected, optionId];

      return {
        ...state,
        selected: updatedSelected,
      };
    }
  }
};

export default optionsReducer;
