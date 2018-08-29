import { createAction } from 'redux-actions';

export const dataCurrentUserSuccess = createAction(
  'DATA_CURRENT_USER_SUCCESS',
  user => ({ user })
);

export const getDataUser = createAction('QUERY_USER', login => ({ login }));

export const dataReposSuccess = createAction('DATA_REPOS_SUCCESS', repos => ({
  repos
}));

export const getLenghtIssues = createAction('DATA_ISSUES', issues => ({
  issues
}));

export const getRequestDataError = createAction(
  'DATA_REQUEST_ERROR',
  error => ({
    error
  })
);
