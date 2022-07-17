import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBzCLzkij3iJDBGdtz9GaWmnUdYelj0rHM',
  authDomain: 'shopping-project-3b8f0.firebaseapp.com',
  projectId: 'shopping-project-3b8f0',
  storageBucket: 'shopping-project-3b8f0.appspot.com',
  messagingSenderId: '370506511835',
  appId: '1:370506511835:web:8f5fe88847c55d8a0463fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
