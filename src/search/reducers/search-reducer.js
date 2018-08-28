import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import searchRecord from '../records/records';
import {
  getDataRequest,
  getDataRequestSuccess
} from '../actions/search-actions';

export default handleActions(
  {
    [getDataRequest]: (state, action) =>
      state.set('query', action.payload.query),
    [getDataRequestSuccess]: (state, action) =>
      state.set('users', action.payload.users)
  },
  new searchRecord({
    query: '',
    users: new List()
  })
);
