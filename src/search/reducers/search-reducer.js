import {handleActions} from 'redux-actions';
import searchRecord from '../records/records';
import {onInputChange, dataUserSuccess} from '../actions/search-actions';
import {List} from 'immutable';

export default handleActions(
  {
    [onInputChange]: (state, action) =>
      state.set('query', action.payload.query),
    [dataUserSuccess]: (state, action) =>
      state.set('users', action.payload.users)
  },
  new searchRecord({
    query: '',
    users: List(),
    isLoading: false
  })
);
