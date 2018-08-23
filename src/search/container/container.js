import Search from '../components/search';
import { connect } from 'react-redux';
import { onInputChange } from '../actions/actions';
import _ from 'lodash';
export default connect(
  state => ({
    isLoading: state.searchReducer.get('isLoading'),
    query: state.searchReducer.get('query'),
    users: state.searchReducer.get('users')
  }),
  dispatch => ({
    onInputChange: _.debounce(value => dispatch(onInputChange(value)), 500)
  })
)(Search);
