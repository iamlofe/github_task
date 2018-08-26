import {Route, Switch, Redirect, Router} from 'react-router-dom';
import React from 'react';

import {ROUTE} from '../constants/app-constants';
import {history} from '../store/index';

class Main extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {ROUTE.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => <route.component {...props} />}
            />
          ))}
          {/* <Redirect to="/search" /> */}
        </Switch>
      </Router>
    );
  }
}
export default Main;
