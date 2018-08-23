import { handleActions } from 'redux-actions';
import searchRecord from '../records/records';
import { onInputChange, dataUserSuccess, onLoading } from '../actions/actions';
import { List } from 'immutable';

export default handleActions(
  {
    [onInputChange]: (state, action) =>
      state.set('query', action.payload.query),
    [dataUserSuccess]: (state, action) =>
      state.set('users', action.payload.users),
    [onLoading]: (state, action) =>
      state.set('isLoading', action.payload.stateLoading)
  },
  new searchRecord({
    query: '',
    users: List(),
    isLoading: false
  })
);
