import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//styles
import './index.css';
// components
import App from './components/App';
// store
import store from './store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
