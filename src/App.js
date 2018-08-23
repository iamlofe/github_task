import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './search/reducers/root-reducer';
import BindSearch from './search/container/container';
import BindUserProfile from './profile/components/profile';
import rootSaga from './search/sagas/sagas';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Redirect from './redirect/components/redirect';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory({});

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route component={BindSearch} path="/search" />
              <Route component={BindUserProfile} path="/user" />
              <Route path="*" component={Redirect} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
