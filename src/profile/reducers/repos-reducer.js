import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import { RecordRepos } from '../records/repos-record';
import {
  dataReposSuccess,
  getRequestDataError
} from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export const reposReducer = handleActions(
  {
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos).set('isLoadingRepos', false),
    [getRequestDataError]: (state, action) =>
      state
        .set('reposError', action.payload.error)
        .set('isLoadingRepos', false),
    [clearStore]: state =>
      new RecordRepos({
        name: null,
        repos: new List(),
        descRepo: null,
        reposError: null,
        isLoadingRepos: true
      })
  },
  new RecordRepos({
    name: null,
    repos: new List(),
    descRepo: null,
    reposError: null,
    isLoadingRepos: true
  })
);
