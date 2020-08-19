class cartsActionsClass {
  constructor() {
    this.SET_CARTS = "SET_CARTS";
    this.ADD_TO_CART = "ADD_TO_CART";
    this.OVERRIDE_EXISTING_PRODUCT = "OVERRIDE_EXISTING_PRODUCT";
    this.INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
    this.DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
    this.REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
    this.REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
    this.REMOVE_SELECTED_PRODUCTS_FROM_CART =
      "REMOVE_SELECTED_PRODUCTS_FROM_CART";
  }

  setCarts = (carts) => {
    return {
      type: this.SET_CARTS,
      payload: {
        carts,
      },
    };
  };

  addToCart = (product) => {
    return {
      type: this.ADD_TO_CART,
      payload: {
        product,
      },
    };
  };

  overrideExistingProduct = (product) => {
    return {
      type: this.OVERRIDE_EXISTING_PRODUCT,
      payload: {
        product,
      },
    };
  };

  incrementQuantity = (productId) => {
    return {
      type: this.INCREMENT_QUANTITY,
      payload: {
        id: productId,
      },
    };
  };

  decrementQuantity = (productId) => {
    return {
      type: this.DECREMENT_QUANTITY,
      payload: {
        id: productId,
      },
    };
  };

  removeOneFromCart = (productId) => {
    return {
      type: this.REMOVE_ONE_FROM_CART,
      payload: {
        id: productId,
      },
    };
  };

  removeAllFromCart = () => {
    return {
      type: this.REMOVE_ALL_FROM_CART,
      payload: {
        emptyCarts: [],
      },
    };
  };

  removeSelectedProductsFromCart = (productIdsArray) => {
    return {
      type: this.REMOVE_SELECTED_PRODUCTS_FROM_CART,
      payload: {
        productIdsArray,
      },
    };
  };
}

export default cartsActionsClass;
