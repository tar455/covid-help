import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';

reactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
