import { handleActions } from 'redux-actions';

import { RecordRepos, RecordUser } from '../records/user-record';
import {
  idUserQuery,
  dataCurrentUserSuccess,
  dataReposSuccess,
  statusLoading
} from '../actions/profile-actions';

export const userReducer = handleActions(
  {
    [idUserQuery]: (state, action) => state.set('login', action.payload.login),
    [dataCurrentUserSuccess]: (state, action) =>
      state.set('user', action.payload.user),
    [statusLoading]: (state, action) =>
      state.set('loading', action.payload.status)
  },
  new RecordUser({
    loading: true
  })
);

export const reposReducer = handleActions(
  {
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos)
  },
  new RecordRepos({})
);
