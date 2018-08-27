import { createAction } from 'redux-actions';

export const dataUserSuccess = createAction('DATA_USERS_SUCCESS', users => ({
  users
}));
export const putDataError = createAction('DATA_USERS_ERROR', error => ({
  error
}));
export const onInputChange = createAction('INPUT_QUERY', query => ({
  query
}));
