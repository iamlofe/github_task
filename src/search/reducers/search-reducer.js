import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import searchRecord from '../records/records';
import {
  getDataRequest,
  getDataRequestError,
  getDataRequestSuccess
} from '../actions/search-actions';
import { clearStore } from '../../main/actions/main-actions';

export default handleActions(
  {
    [getDataRequest]: (state, action) =>
      state.set('query', action.payload.query),
    [getDataRequestSuccess]: (state, action) =>
      state.set('users', action.payload.users),
    [getDataRequestError]: (state, action) =>
      state.set('error', action.payload.error),
    [clearStore]: state =>
      new searchRecord({
        query: '',
        users: new List(),
        error: null
      })
  },
  new searchRecord({
    query: '',
    users: new List(),
    error: null
  })
);
