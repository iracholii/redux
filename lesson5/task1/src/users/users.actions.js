export const PREVIOUS_PAGE = 'USERS_LIST/PREVIOUS_PAGE';
export const NEXT_PAGE = 'USERS_LIST/NEXT_PAGE';

export const goPrev = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

export const goNext = () => {
  return {
    type: NEXT_PAGE,
  };
};
