import { createSelector } from 'reselect';

export const optionsSelector = state => state.options.optionsList;

export const selectedSelector = state => state.options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsSelector, selectedSelector],
  (allOptionsList, selectedIds) => allOptionsList.filter(option => selectedIds.includes(option.id)),
);

// export const selectedOptionsSelector = state => {
//   const allOptionsList = optionsSelector(state);
//   const selectedIds = selectedSelector(state);
//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
  [optionsSelector, selectedSelector],
  (allOptionsList, selectedIds) =>
    allOptionsList.filter(option => !selectedIds.includes(option.id)),
);

// export const availableOptionsSelector = state => {
//   const allOptionsList = optionsSelector(state);
//   const selectedIds = selectedSelector(state);
//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
