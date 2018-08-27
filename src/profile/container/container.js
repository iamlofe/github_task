import { connect } from 'react-redux';
import Profile from '../../profile/components/profile/profile';

import { idUserQuery } from '../actions/profile-actions';

export default connect(
  state => ({
    user: state.userReducer.get('user'),
    loading: state.userReducer.get('loading'),
    repos: state.reposReducer.get('repos')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(idUserQuery(login))
  })
)(Profile);
