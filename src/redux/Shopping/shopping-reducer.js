import * as actionTypes from "./shopping-types";
import {
  ADD_TO_CART,
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
} from "./shopping-actions";
import { REHYDRATE } from "redux-persist";

const INITIAL_STATE = {
  products: [],
  isLoadingProducts: false,
  productsAddedToCart: [],
  isAddedToCart: false,
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log("Proba: Product reducer", action);
  switch (action.type) {
    case REHYDRATE: {
      return {
        ...INITIAL_STATE,
        productsAddedToCart: action.payload
          ? action.payload.shopReducer.productsAddedToCart
          : [],
      };
    }
    case ADD_TO_CART: {
      const itemId = action.itemId;
      return {
        ...state,
        productsAddedToCart: [
          ...new Set([...state.productsAddedToCart, itemId]),
        ],
      };
    }
    case REMOVE_FROM_CART: {
      console.log("Remove state");
      const itemId = action.itemId;
      return {
        ...state,
        productsAddedToCart: state.productsAddedToCart.filter(
          (x) => x.componentId !== itemId
        ),
        isAddedToCart: false,
      };
    }
    case ADJUST_QTY: {
      return { ...state };
    }
    case LOAD_CURRENT_ITEM: {
      return { ...state };
    }
    case FETCHING_PRODUCTS:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case FETCHING_PRODUCTS_SUCCESS: {
      const products = action.products;
      console.log("produs" + products);
      return {
        ...state,
        isLoadingProducts: false,
        products,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
