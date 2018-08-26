import {createAction} from 'redux-actions';

export const dataCurrentUserSuccess = createAction(
  'PUT_CURRENT_USER',
  user => ({user})
);

export const idUserQuery = createAction('USER_QUERY', login => ({login}));

export const statusLoading = createAction('STATUS_LOADING', status => ({
  status
}));
