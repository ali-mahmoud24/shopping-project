<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { AuthContextProvider } from './context/auth-context';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </BrowserRouter>
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { AuthContextProvider } from './context/auth-context';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </BrowserRouter>
);
>>>>>>> 7760c1b4d2de1acaffc77e3548ad0edc746d2589
