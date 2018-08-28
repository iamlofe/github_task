import { handleActions } from 'redux-actions';

import { RecordRepos } from '../records/repos-record';
import { dataReposSuccess } from '../actions/profile-actions';

export const reposReducer = handleActions(
  {
    [dataReposSuccess]: (state, action) =>
      state.set('repos', action.payload.repos)
  },
  new RecordRepos({})
);
