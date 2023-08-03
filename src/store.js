import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const reducers = { user: userReducer, cart: cartReducer };

const store = configureStore({
  reducer: reducers,
});

export default store;
