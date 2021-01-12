import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './app/App';

import './index.css';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);