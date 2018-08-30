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

export const getLenghtIssues = createAction(
  'GET_LENGTH_ISSUES',
  count => count
);

export const getDataIssues = createAction('GET_DATA_NAME_REPO', repo => ({
  repo
}));
