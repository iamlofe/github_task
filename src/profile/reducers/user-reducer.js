import { handleActions } from 'redux-actions';

import { CurrentUserRecord } from '../records/user-record';
import {
  getDataUser,
  dataReposSuccess,
  dataCurrentUserSuccess,
  getLenghtIssues
} from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export const userReducer = handleActions(
  {
    [getDataUser]: (state, action) =>
      state.set('login', action.payload.login).set('isLoadingUser', true),
    [dataCurrentUserSuccess]: (state, action) =>
      state
        .set('avatar_url', action.payload.user.get('avatar_url'))
        .set('isLoadingUser', false),
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos),
    [getLenghtIssues]: (state, action) => {
      return state.setIn(
        ['repos', action.payload.index, 'issues'],
        action.payload.count
      );
    },
    [clearStore]: state =>
      new CurrentUserRecord({
        isLoadingUser: true
      })
  },
  new CurrentUserRecord({
    isLoadingUser: true
  })
);
