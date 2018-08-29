import { connect } from 'react-redux';
import Profile from '../../profile/components/profile/profile';

import { getDataUser } from '../actions/profile-actions';
import { clearStore } from '../../main/actions/main-actions';

export default connect(
  state => ({
    user: state.userReducer.get('user'),
    repos: state.reposReducer.get('repos'),
    issues: state.issuesReducer.get('issues'),

    userError: state.userReducer.get('userError'),
    reposError: state.reposReducer.get('reposError'),
    issuesError: state.issuesReducer.get('issuesError'),

    isLoadingUser: state.userReducer.get('isLoadingUser'),
    isLoadingRepos: state.reposReducer.get('isLoadingRepos'),
    isLoadingIssues: state.issuesReducer.get('isLoadingIssues')
  }),
  dispatch => ({
    onLoadDataCurrentUser: login => dispatch(getDataUser(login)),
    onClearStore: () => dispatch(clearStore())
  })
)(Profile);
