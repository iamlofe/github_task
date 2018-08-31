import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getDataUsersSuccess,
  getDataUsersError,
  getDataRequest
} from '../actions/search-actions';

import { requestSearchUsers } from '../controllers/request-controller';

function* getUsers({ payload: { query } }) {
  try {
    const users = yield call(requestSearchUsers, query);

    yield put(getDataUsersSuccess(users));
  } catch (e) {
    yield put(getDataUsersError(e.message));
  }
}

export function* watchUsers() {
  yield takeLatest(getDataRequest, getUsers);
}
