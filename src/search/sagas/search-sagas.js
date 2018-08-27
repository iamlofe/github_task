import { call, put, takeLatest } from 'redux-saga/effects';

import {
  onGetDataRequestSuccess,
  onGetDataRequestError,
  onGetDataRequest
} from '../actions/search-actions';
import { requestSearch } from '../controllers/request-controller';

function* getUsers(action) {
  try {
    if (action.payload.query) {
      const users = yield call(requestSearch, action.payload.query);
      yield put(onGetDataRequestSuccess(users));
    } else {
      yield put(onGetDataRequestSuccess([]));
    }
  } catch (e) {
    yield put(onGetDataRequestError(e.message));
  }
}

export function* watchUsers() {
  yield takeLatest(onGetDataRequest, getUsers);
}
