import { connect } from 'react-redux';

import Profile from '../../profile/components/profile/profile';

import { getDataUser } from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export default connect(
  state => ({
    login: state.userReducer.get('login'),
    repos: state.userReducer.get('repos'),
    avatarUrl: state.userReducer.get('avatarUrl'),
    isLoadingUser: state.userReducer.get('isLoadingUser')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(getDataUser(login)),
    onClearStore: () => dispatch(clearStore())
  })
)(Profile);
