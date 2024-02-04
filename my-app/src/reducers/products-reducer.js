import { ACTION_TYPE } from "../constants/action-type";

const productsPersisitState = JSON.parse(sessionStorage.getItem("testBT"));

const getProductsState = {
  products: [],
};

const initialProductsState = productsPersisitState
  ? productsPersisitState
  : getProductsState;

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};
