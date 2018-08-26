import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

//import logo from './logo.svg';
import './App.css';
import AppRoute from '../../routes/AppRoute';


const App = () => (
  <div>
    <Provider store={store}>
      <AppRoute />
    </Provider>

  </div>
);
export default App;

