import {createAction} from 'redux-actions';

export const dataUserSuccess = createAction('PUT_DATA_USERS', users => ({
  users
}));
export const putDataError = createAction('PUT_DATA_ERROR', error => ({
  error
}));
export const onInputChange = createAction('INPUT_QUERY', query => ({
  query
}));

export const dataCurrentUserSuccess = createAction(
  'PUT_CURRENT_USER',
  login => ({login})
);
