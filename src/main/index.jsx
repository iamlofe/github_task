import { Provider } from 'react-redux';
import React from 'react';

import Main from './components/main';

import createStore from './store';

import 'antd/dist/antd.css';

const store = createStore();

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
