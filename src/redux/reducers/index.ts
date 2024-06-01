import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "../../redux/slices/productSlice";

export const combinedReducers = combineReducers({
    product: productReducer
});