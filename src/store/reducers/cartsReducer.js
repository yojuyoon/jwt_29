import { cartsActions } from "../actions";

const {
  SET_CARTS,
  ADD_TO_CART,
  OVERRIDE_EXISTING_PRODUCT,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_SELECTED_PRODUCTS_FROM_CART,
} = cartsActions;

const INITIAL_CARTS_STATE = [];

const carts = (state = INITIAL_CARTS_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CARTS:
      return payload.carts;

    case ADD_TO_CART:
      return [...state, payload.product];

    case OVERRIDE_EXISTING_PRODUCT:
      return state.map((product) => {
        return product.id === payload.product.id ? payload.product : product;
      });

    case INCREMENT_QUANTITY:
      return state.map((product) => {
        return product.id === payload.id
          ? {
            ...product,
            quantity: product.quantity + 1,
          }
          : product;
      });

    case DECREMENT_QUANTITY:
      return state.map((product) => {
        return product.id === payload.id
          ? {
            ...product,
            quantity: product.quantity - 1,
          }
          : product;
      });

    case REMOVE_ONE_FROM_CART:
      return state.filter((product) => product.id !== payload.id);

    case REMOVE_ALL_FROM_CART:
      return payload.emptyCarts;

    case REMOVE_SELECTED_PRODUCTS_FROM_CART:
      return state.filter(
        (product) => !payload.productIdsArray.includes(product.id),
      );

    default:
      return state;
  }
};

export default carts;
