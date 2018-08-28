import { connect } from 'react-redux';
import Profile from '../../profile/components/profile/profile';

import { getDataUser } from '../actions/profile-actions';

export default connect(
  state => ({
    user: state.userReducer.get('user'),
    repos: state.reposReducer.get('repos'),
    isLoading: state.userReducer.get('isLoading'),
    lengthIssues: state.issuesReducer.get('length')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(getDataUser(login))
  })
)(Profile);
