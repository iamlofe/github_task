import React from 'react';
import { Redirect } from 'react-router-dom';

class RedirectUser extends React.PureComponent {
  render() {
    return <Redirect to="/search" />;
  }
}
export default RedirectUser;
