import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  dataUserSuccess,
  putDataError,
  onInputChange,
  onLoading
} from '../actions/actions';
import axios from 'axios';

function* getUsers(action) {
  try {
    let response;

    if (action.payload.query) {
      response = yield call(
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
