import {combineReducers} from 'redux';
import searchReducer from '../../search/reducers/search-reducer';
import profileReducer from '../../profile/reducers/profile-reducer';

export default combineReducers({
  searchReducer,
  profileReducer
});
