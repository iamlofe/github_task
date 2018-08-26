import {connect} from 'react-redux';
import Profile from '../../profile/components/profile/profile';

import {idUserQuery} from '../actions/profile-actions';

export default connect(
  state => ({
    user: state.profileReducer.get('user'),
    loading: state.profileReducer.get('loading')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(idUserQuery(login))
  })
)(Profile);
