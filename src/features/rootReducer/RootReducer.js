//createSlice
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, payload) => {
      console.log(state.cart);
      console.log(state.cart.map((i) => i));
      state.cart = [...state.cart, payload];
    },
    remove: (state, payload) => {
      console.log(payload.payload);
      //console.log(state.cart);
      let remaining = state.cart.filter(
        (item) => item.payload.id !== payload.payload
      );
      console.log(remaining);
      state.cart = remaining;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
