import { handleActions } from 'redux-actions';

import { CurrentUserRecord } from '../records/user-record';
import {
  getDataUser,
  dataReposSuccess,
  dataCurrentUserSuccess,
  setIssueCount
} from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

const initialState = new CurrentUserRecord({
  isLoadingUser: true
});

export const userReducer = handleActions(
  {
    [getDataUser]: (state, action) =>
      state.set('login', action.payload.login).set('isLoadingUser', true),
    [dataCurrentUserSuccess]: (state, action) =>
      state
        .set('avatarUrl', action.payload.user.get('avatarUrl'))
        .set('isLoadingUser', false),
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos),
    [setIssueCount]: (state, action) =>
      state.setIn(
        ['repos', action.payload.index, 'issues'],
        action.payload.count
      ),
    [clearStore]: () => initialState
  },
  initialState
);
