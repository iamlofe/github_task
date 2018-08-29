import { createAction } from 'redux-actions';

export const getDataRequestSuccess = createAction(
  'GET_DATA_USERS_SUCCESS',
  users => ({
    users
  })
);
export const getDataRequestError = createAction(
  'GET_DATA_USERS_ERROR',
  error => ({
    error
  })
);
export const getDataRequest = createAction('INPUT_QUERY', query => ({
  query
}));
