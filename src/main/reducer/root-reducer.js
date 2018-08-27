import { combineReducers } from 'redux';
import searchReducer from '../../search/reducers/search-reducer';
import {
  userReducer,
  reposReducer
} from '../../profile/reducers/profile-reducer';

export default combineReducers({
  searchReducer,
  userReducer,
  reposReducer
});
