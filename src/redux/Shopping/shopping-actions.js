import * as actionTypes from "./shopping-types";
import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const FETCHING_PRODUCTS_SUCCESS = "FETCHING_PRODUCTS_SUCCESS";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.FETCHING_PRODUCTS });
    console.log("probasadsad");
    var result = await axios.get("https://localhost:44326/CPU");
    const cpus = result.data;

    result = await axios.get("https://localhost:44326/GPU");
    const gpus = result.data;

    result = await axios.get("https://localhost:44326/MOBO");
    const mobos = result.data;

    result = await axios.get("https://localhost:44326/PSU");
    const psus = result.data;

    result = await axios.get("https://localhost:44326/RAM");
    const rams = result.data;

    const products = [].concat(cpus, gpus, mobos, psus, rams);

    dispatch({ type: FETCHING_PRODUCTS_SUCCESS, products });
  };
};

export const addToCart = (itemId) => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_TO_CART, itemId });
  };
};

export const removeFromCart = (itemId) => {
  console.log("Removed from cart");
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, itemId });
  };
};

export const adjustQty = (itemId, value) => {
  return (dispatch, getState) => {
    dispatch({ type: ADJUST_QTY, itemId, value });
  };
};

export const loadCurrentItem = (item) => {
  return (dispatch, getState) => {
    dispatch({ type: LOAD_CURRENT_ITEM, item });
  };
};
