import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import { RecordUser } from '../records/user-record';
import {
  getDataUser,
  getRequestDataError,
  dataCurrentUserSuccess
} from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export const userReducer = handleActions(
  {
    [getDataUser]: (state, action) =>
      state.set('login', action.payload.login).set('isLoadingUser', true),
    [dataCurrentUserSuccess]: (state, action) =>
      state.set('user', action.payload.user).set('isLoadingUser', false),
    [getRequestDataError]: (state, action) =>
      state.set('userError', action.payload.error).set('isLoadingUser', false),
    [clearStore]: state =>
      new RecordUser({
        user: null,
        login: null,
        userError: null,
        avatar_url: null,
        isLoadingUser: true
      })
  },
  new RecordUser({
    user: null,
    login: null,
    userError: null,
    avatar_url: null,
    isLoadingUser: true
  })
);
