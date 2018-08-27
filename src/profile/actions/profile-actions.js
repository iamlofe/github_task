import { createAction } from 'redux-actions';

export const dataCurrentUserSuccess = createAction(
  'DATA_CURRENT_USER_SUCCESS',
  user => ({ user })
);

export const idUserQuery = createAction('QUERY_USER', login => ({ login }));

export const statusLoading = createAction('STATUS_LOADING', status => ({
  status
}));

export const dataReposSuccess = createAction('DATA_REPOS_SUCCESS', repos => ({
  repos
}));
