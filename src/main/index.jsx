import React from 'react';
import { Provider } from 'react-redux';

import Main from './components/main';
import { store } from './store/index';

import 'antd/dist/antd.css';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
