import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";
import loadingReducer from "./loadingSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    search: searchSlice,
    loading: loadingReducer,
  },
});

export default store;
