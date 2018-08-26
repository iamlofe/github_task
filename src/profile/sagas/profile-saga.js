import {call, put, takeLatest, fork} from 'redux-saga/effects';
import axios from 'axios';
import {List, Map} from 'immutable';

import {
  dataCurrentUserSuccess,
  idUserQuery,
  statusLoading
} from '../actions/profile-actions';
import {requestForOneUser} from '../controller/profile-controller';
import {putDataError} from '../../search/actions/search-actions';

function* getCurrentUser(action) {
  console.log('sagaa');
  try {
    yield put(statusLoading(true));
    const currentUser = yield call(requestForOneUser, action.payload.login);
    yield put(dataCurrentUserSuccess(Map(currentUser)));
    yield put(statusLoading(false));
  } catch (e) {
    yield put(putDataError(e.message));
  }
}

export function* watchCurrentUser() {
  yield takeLatest(idUserQuery, getCurrentUser);
}
