import { createAction } from 'redux-actions';

export const onGetDataRequestSuccess = createAction(
  'DATA_USERS_SUCCESS',
  users => ({
    users
  })
);
export const onGetDataRequestError = createAction(
  'DATA_USERS_ERROR',
  error => ({
    error
  })
);
export const onGetDataRequest = createAction('INPUT_QUERY', query => ({
  query
}));
