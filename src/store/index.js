import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
