import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
