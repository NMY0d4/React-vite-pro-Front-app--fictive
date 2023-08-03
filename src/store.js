import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

const reducers = { user: userReducer };

const store = configureStore({
  reducer: reducers,
});

export default store;
