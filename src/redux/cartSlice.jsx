import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { setcart } = cartSlice.actions;
export default cartSlice.reducer;
