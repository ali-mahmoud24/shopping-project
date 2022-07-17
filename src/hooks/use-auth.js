import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

let logoutTimer;

export const calculateRemainingTime = (expirationTime) =>
  expirationTime - Date.now();

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const tokenData = retrieveStoredToken();

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);

      logoutTimer = setTimeout(
        () => dispatch(authActions.logout()),
        3000
      );
    }
  }, [tokenData]);
};

export default useAuth;
