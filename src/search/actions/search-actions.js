import { createAction } from 'redux-actions';

export const getDataUsersSuccess = createAction(
  'GET_DATA_USERS_SUCCESS',
  users => ({
    users
  })
);
export const getDataUsersError = createAction(
  'GET_DATA_USERS_ERROR',
  error => ({
    error
  })
);
export const getDataRequest = createAction('GET_DATA_REQUEST', query => ({
  query
}));
