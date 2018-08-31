import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import SearchRecord from '../records/records';

import { getDataRequest, getDataUsersSuccess } from '../actions/search-actions';
import { clearStore } from '../../main/actions/main-actions';
const initialState = new SearchRecord({
  query: '',
  users: new List(),
  error: null,
  isLoading: true
});
export default handleActions(
  {
    [getDataRequest]: (state, action) =>
      state.set('query', action.payload.query).set('isLoading', true),
    [getDataUsersSuccess]: (state, action) =>
      state.set('users', action.payload.users).set('isLoading', false),
    [clearStore]: state =>
      new SearchRecord({
        query: '',
        users: new List(),
        error: null
      })
  },
  initialState
);
