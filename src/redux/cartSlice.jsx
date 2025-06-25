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

    removeItem(state, action) {
      const id = action.payload;
      const findItem = state.products.find((product) => product.id === id);

      if (findItem) {
        state.totalprice -= findItem.totalprice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    plusone(state, action) {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);

      if (product) {
        product.quantity += 1;
        product.totalprice += product.price;
        state.totalQuantity += 1;
        state.totalprice += product.price;
      }
    },

    minusone(state, action) {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalprice -= product.price;
        state.totalQuantity -= 1;
        state.totalprice -= product.price;
      }
    },

    clearCart(state) {
      state.products = [];
      state.totalprice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addtoCart, removeItem, plusone, minusone, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
