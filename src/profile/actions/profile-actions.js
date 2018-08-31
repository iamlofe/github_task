import { createAction } from 'redux-actions';

export const dataCurrentUserSuccess = createAction(
  'DATA_CURRENT_USER_SUCCESS',
  user => ({ user })
);

export const getDataUser = createAction('GET_DATA_USER', login => ({ login }));

export const dataReposSuccess = createAction('DATA_REPOS_SUCCESS', repos => ({
  repos
}));

export const getDataUserError = createAction('DATA_DATA_USER_ERROR', error => ({
  error
}));

// For put information of issues to store
export const setIssueCount = createAction(
  'GET_ISSUES_COUNT',
  issueInfo => issueInfo
);
// Put info to controller
export const setInfoForController = createAction(
  'PUT_INFO_CONTROLLER',
  infoForIssues => infoForIssues
);
