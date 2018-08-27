import { Route, Switch, Redirect, Router } from 'react-router-dom';
import React from 'react';

import { ROUTES } from '../constants/app-constants';
import { history } from '../history/history';

class Main extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => <route.component {...props} />}
            />
          ))}
          <Redirect from="*" to="/search" />
        </Switch>
      </Router>
    );
  }
}
export default Main;
