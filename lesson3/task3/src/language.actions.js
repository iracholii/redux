export const SET = 'LANGUAGE/SET';

export const setLanguage = language => {
  return {
    type: SET,
    payload: { language },
  };
};
