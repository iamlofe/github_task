import { combineReducers } from 'redux';
import searchReducer from '../../search/reducers/search-reducer';

import { userReducer } from '../../profile/reducers/user-reducer';
import { reposReducer } from '../../profile/reducers/repos-reducer';
import { issuesReducer } from '../../profile/reducers/issues-reducer';

export default combineReducers({
  searchReducer,
  userReducer,
  reposReducer,
  issuesReducer
});
