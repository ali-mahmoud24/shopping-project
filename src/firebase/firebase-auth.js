<<<<<<< HEAD
import app from '../firebase/firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Initialize Auth Service
const auth = getAuth(app);

export const signup = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return {
    idToken: user._tokenResponse.idToken,
    expirationTime: Date.now() + user._tokenResponse.expiresIn * 1000,
  };
};

export const login = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return {
    idToken: user._tokenResponse.idToken,
    expirationTime: Date.now() + user._tokenResponse.expiresIn * 1000,
  };
};

export const logout = () => {
  return signOut(auth);
};
=======
import app from '../firebase/firebase-config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Initialize Auth Service
const auth = getAuth(app);

export const signup = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return {
    idToken: user._tokenResponse.idToken,
    expirationTime: Date.now() + user._tokenResponse.expiresIn * 1000,
  };
};

export const login = async (email, password) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return {
    idToken: user._tokenResponse.idToken,
    expirationTime: Date.now() + user._tokenResponse.expiresIn * 1000,
  };
};

export const logout = () => {
  return signOut(auth);
};
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
