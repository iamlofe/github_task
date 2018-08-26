import {call, put, takeLatest, fork} from 'redux-saga/effects';
import axios from 'axios';
import {List, Map} from 'immutable';

import {
  dataUserSuccess,
  putDataError,
  onInputChange
} from '../actions/search-actions';
import {requestSearch} from '../controllers/request-controller';
import {watchCurrentUser} from '../../profile/sagas/profile-saga';

function* getUsers(action) {
  try {
    if (action.payload.query) {
      const users = yield call(requestSearch, action.payload.query);
      yield put(dataUserSuccess(users.map(user => Map(user))));
    } else {
      yield put(dataUserSuccess([]));
    }
  } catch (e) {
    yield put(putDataError(e.message));
  }
}

function* watchUsers() {
  yield takeLatest(onInputChange, getUsers);
}

export default function*() {
  yield fork(watchUsers);
  yield fork(watchCurrentUser);
}
