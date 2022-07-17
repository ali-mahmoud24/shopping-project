import { createSlice } from '@reduxjs/toolkit';
import { calculateRemainingTime, retrieveStoredToken } from '../hooks/use-auth';

let logoutTimer;

let initialToken;
let userIsLoggedIn;

const tokenData = retrieveStoredToken();

if (tokenData) {
  initialToken = tokenData.token;
  userIsLoggedIn = !!tokenData.token;
}

const authInitialState = {
  token: tokenData ? initialToken : '',
  isLoggedIn: tokenData ? userIsLoggedIn : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      const { idToken, expirationTime } = action.payload;

      state.token = idToken;
      state.isLoggedIn = true;

      localStorage.setItem('token', idToken);
      localStorage.setItem('expirationTime', expirationTime);

      // const remainingTime = calculateRemainingTime(expirationTime);
    },

    logout(state) {
      console.log('logout');
      state.token = null;
      state.isLoggedIn = false;

      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
