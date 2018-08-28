import { handleActions } from 'redux-actions';

import { RecordUser } from '../records/user-record';
import {
  getDataUser,
  dataCurrentUserSuccess
} from '../actions/profile-actions';

export const userReducer = handleActions(
  {
    [getDataUser]: (state, action) =>
      state.set('login', action.payload.login).set('isLoading', true),
    [dataCurrentUserSuccess]: (state, action) =>
      state.set('user', action.payload.user).set('isLoading', false)
  },
  new RecordUser({
    isLoading: true
  })
);
