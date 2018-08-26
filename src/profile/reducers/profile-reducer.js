import {handleActions} from 'redux-actions';

import userRecord from '../records/user-record';
import {
  idUserQuery,
  dataCurrentUserSuccess,
  statusLoading
} from '../actions/profile-actions';

export default handleActions(
  {
    [idUserQuery]: (state, action) => state.set('login', action.payload.login),
    [dataCurrentUserSuccess]: (state, action) =>
      state.set('user', action.payload.user),
    [statusLoading]: (state, action) =>
      state.set('loading', action.payload.status)
  },
  new userRecord({
    login: '',
    user: {},
    loading: true
  })
);
