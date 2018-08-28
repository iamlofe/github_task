import { handleActions } from 'redux-actions';

import { RecordIssues } from '../records/issues-record';
import { getLenghtIssues } from '../actions/profile-actions';

export const issuesReducer = handleActions(
  {
    [getLenghtIssues]: (state, action) =>
      state.set('length', action.payload.issues)
  },
  new RecordIssues({})
);
