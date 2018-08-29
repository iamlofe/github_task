import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import searchRecord from '../records/records';

import { getDataRequest, getDataUsersSuccess } from '../actions/search-actions';
import { clearStore } from '../../main/actions/main-actions';

export default handleActions(
  {
    [getDataRequest]: (state, action) =>
      state.set('query', action.payload.query),
    [getDataUsersSuccess]: (state, action) =>
      state.set('users', action.payload.users).set('isLoading', false),
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
    error: null,
    isLoading: true
  })
);
