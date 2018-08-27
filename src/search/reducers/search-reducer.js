import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import searchRecord from '../records/records';
import {
  onGetDataRequest,
  onGetDataRequestSuccess
} from '../actions/search-actions';

export default handleActions(
  {
    [onGetDataRequest]: (state, action) =>
      state.set('query', action.payload.query),
    [onGetDataRequestSuccess]: (state, action) =>
      state.set('users', action.payload.users)
  },
  new searchRecord({
    query: '',
    users: new List()
  })
);
