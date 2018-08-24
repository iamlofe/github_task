import { call, put, takeLatest, fork } from 'redux-saga/effects';
import axios from 'axios';

import {
  dataUserSuccess,
  putDataError,
  onInputChange
} from '../actions/search-actions';

function* getUsers(action) {
  try {
    if (action.payload.query) {
      const response = yield call(
        axios.get,
        `https://api.github.com/search/users?q=${action.payload.query}`
      );
      yield put(dataUserSuccess(response.data.items));
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
}
