import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../assets/mockData";

const initialState = {
  Products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.Products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
