import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalprice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.products.find(
        (product) => product.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalprice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalprice += newItem.price;
      state.totalQuantity += 1;
    },
  },
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
