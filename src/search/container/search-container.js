import { connect } from 'react-redux';
import { debounce } from 'lodash';

import Search from '../components/search/search';
import { getDataRequest } from '../actions/search-actions';
import { durationDelayRequest } from '../../main/constants/app-constants';

export default connect(
  state => ({
    query: state.searchReducer.get('query'),
    users: state.searchReducer.get('users')
  }),
  dispatch => ({
    onInputChange: debounce(
      value => dispatch(getDataRequest(value)),
      durationDelayRequest
    )
  })
)(Search);
