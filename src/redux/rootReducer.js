import { combineReducers } from "redux";

import shopReducer from "./Shopping/shopping-reducer";

const products = combineReducers({
  shopReducer,
});

export default products;
