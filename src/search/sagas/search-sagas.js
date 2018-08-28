import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getDataRequestSuccess,
  getDataRequestError,
  getDataRequest
} from '../actions/search-actions';
import { requestSearch } from '../controllers/request-controller';
import { List } from 'immutable';

function* getUsers(action) {
  try {
    if (action.payload.query) {
      const users = yield call(requestSearch, action.payload.query);
      yield put(getDataRequestSuccess(users));
    } else {
      yield put(getDataRequestSuccess(new List()));
    }
  } catch (e) {
    yield put(getDataRequestError(e.message));
  }
}

export function* watchUsers() {
  yield takeLatest(getDataRequest, getUsers);
}
