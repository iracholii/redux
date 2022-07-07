import { ADD, REMOVE } from './cart.actions';

const initialState = { products: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD:
      return {
        ...state,
        products: [...state.products, action.payload.productData],
      };

    case REMOVE:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };
  }
};

export default cartReducer;
