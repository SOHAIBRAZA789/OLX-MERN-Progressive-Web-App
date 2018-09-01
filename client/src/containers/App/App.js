import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { ToastContainer } from 'react-toastify';

//import logo from './logo.svg';
import './App.css';
import AppRoute from '../../routes/AppRoute';


const App = () => (
  <div>
    <Provider store={store}>
    <div>
      <AppRoute />
      <ToastContainer autoClose={8000} />
    </div>
    </Provider>

  </div>
);
export default App;

