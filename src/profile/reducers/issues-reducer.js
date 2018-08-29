import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import { RecordIssues } from '../records/issues-record';

import {
  getLenghtIssues,
  getRequestDataError
} from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export const issuesReducer = handleActions(
  {
    [getLenghtIssues]: (state, action) =>
      state.set('issues', action.payload.issues).set('isLoadingIssues', false),
    [getRequestDataError]: (state, action) =>
      state
        .set('issuesError', action.payload.error)
        .set('isLoadingIssues', false),
    [clearStore]: state =>
      new RecordIssues({
        issues: new List(),
        issuesError: null,
        isLoadingIssues: true
      })
  },
  new RecordIssues({
    issues: new List(),
    issuesError: null,
    isLoadingIssues: true
  })
);
