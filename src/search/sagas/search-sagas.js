import { List } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getDataUsersSuccess,
  getDataUsersError,
  getDataRequest
} from '../actions/search-actions';

import { requestSearchUsers } from '../controllers/request-controller';

function* getUsers(action) {
  try {
    if (action.payload.query) {
      const users = yield call(requestSearchUsers, action.payload.query);
      yield put(getDataUsersSuccess(users));
    } else {
      yield put(getDataUsersSuccess(new List()));
    }
  } catch (e) {
    yield put(getDataUsersError(e.message));
  }
}

export function* watchUsers() {
  yield takeLatest(getDataRequest, getUsers);
}
