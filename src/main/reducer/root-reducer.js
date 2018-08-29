import { combineReducers } from 'redux';

import searchReducer from '../../search/reducers/search-reducer';

import { userReducer } from '../../profile/reducers/user-reducer';

export default combineReducers({
  searchReducer,
  userReducer
});
