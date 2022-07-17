<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: cartSlice,
  },
});

export default store;
=======
import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: cartSlice,
  },
});

export default store;
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
