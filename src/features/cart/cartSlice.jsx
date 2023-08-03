import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.cart.push(payload);
    },
    deleteItem(state, { payload }) {
      state.cart.filter((pizza) => pizza.id !== payload);
    },
    removeAllItems(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, payload) {},
  },
});

export const { addItem, deleteItem, removeAllItems, increaseItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
