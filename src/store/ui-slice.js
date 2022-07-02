import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsShown: false },
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    closeCart(state) {
      state.cartIsShown = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
