import { handleActions } from 'redux-actions';

import { RecordRepos, RecordUser } from '../records/user-record';
import {
  idUserQuery,
  dataCurrentUserSuccess,
  dataReposSuccess
} from '../actions/profile-actions';

export const userReducer = handleActions(
  {
    [idUserQuery]: (state, action) =>
      state.set('login', action.payload.login).set('isLoading', true),
    [dataCurrentUserSuccess]: (state, action) =>
      state.set('user', action.payload.user).set('isLoading', false)
  },
  new RecordUser({
    isLoading: true
  })
);

export const reposReducer = handleActions(
  {
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos)
  },
  new RecordRepos({})
);
