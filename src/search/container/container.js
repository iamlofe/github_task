import Search from '../components/search';
import { connect } from 'react-redux';
import { onInputChange } from '../actions/actions';
import { debounce } from 'lodash';

export default connect(
  state => ({
    isLoading: state.searchReducer.get('isLoading'),
    query: state.searchReducer.get('query'),
    users: state.searchReducer.get('users')
  }),
  dispatch => ({
    onInputChange: debounce(value => dispatch(onInputChange(value)), 500)
  })
)(Search);
