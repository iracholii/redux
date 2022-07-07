export const ADD = 'CART/ADD';
export const REMOVE = 'CART/REMOVE';

export const addProduct = productData => {
  return {
    type: ADD,
    payload: { productData },
  };
};

export const removeProduct = productId => {
  return {
    type: REMOVE,
    payload: { productId },
  };
};
