import { connect } from 'react-redux';
import Profile from '../../profile/components/profile/profile';

import { idUserQuery } from '../actions/profile-actions';

export default connect(
  state => ({
    user: state.userReducer.get('user'),
    repos: state.reposReducer.get('repos'),
    isLoading: state.userReducer.get('isLoading')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(idUserQuery(login))
  })
)(Profile);
