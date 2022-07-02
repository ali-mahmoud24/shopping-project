import { createSlice } from '@reduxjs/toolkit';

let logoutTimer;

const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return { token: storedToken, duration: remainingTime };
};

const tokenData = retriveStoredToken();
let initialToken;
let userIsLoggedIn;

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

      localStorage.setItem('token', idToken);
      localStorage.setItem('expirationTime', expirationTime);

      const remainingTime = calculateRemainingTime(expirationTime);

      logoutTimer = setTimeout(authSlice.caseReducers.logout, 3000);

      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.token = null;

      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
  },
});

if (tokenData) {
  console.log(tokenData.duration);
  logoutTimer = setTimeout(authSlice.caseReducers.logout, tokenData.duration);
}

export const authActions = authSlice.actions;

export default authSlice.reducer;
