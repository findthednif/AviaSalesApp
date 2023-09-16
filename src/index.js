import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';

import App from './components/App/App';
import checkboxStore from './components/Redux/reduxStore';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <Provider store={checkboxStore}>
    <App />
  </Provider>,
);
