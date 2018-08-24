import { connect } from 'react-redux';
import { debounce } from 'lodash';

import Search from '../components/search/search';
import { onInputChange } from '../actions/search-actions';
import { durationDelayRequest } from '../../main/constants/app-constants';

export default connect(
  state => ({
    isLoading: state.searchReducer.get('isLoading'),
    query: state.searchReducer.get('query'),
    users: state.searchReducer.get('users')
  }),
  dispatch => ({
    onInputChange: debounce(
      value => dispatch(onInputChange(value)),
      durationDelayRequest
    )
  })
)(Search);
