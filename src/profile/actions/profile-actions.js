import { createAction } from 'redux-actions';

export const dataCurrentUserSuccess = createAction(
  'DATA_CURRENT_USER_SUCCESS',
  user => ({ user })
);

export const idUserQuery = createAction('QUERY_USER', login => ({ login }));

export const dataReposSuccess = createAction('DATA_REPOS_SUCCESS', repos => ({
  repos
}));

export const dataIssues = createAction('DATA_ISSUES', issues => ({ issues }));
