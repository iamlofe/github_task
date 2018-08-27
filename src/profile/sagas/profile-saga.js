import { call, put, takeLatest, fork } from 'redux-saga/effects';
import axios from 'axios';
import { List, Map } from 'immutable';

import {
  dataCurrentUserSuccess,
  idUserQuery,
  statusLoading,
  dataReposSuccess
} from '../actions/profile-actions';
import {
  requestForOneUser,
  requestForRepos
} from '../controller/profile-controller';

import { putDataError } from '../../search/actions/search-actions';
import { RecordUser, RecordRepos } from '../records/user-record';

function* getCurrentUser(action) {
  try {
    yield put(statusLoading(true));
    const repos = yield call(requestForRepos, action.payload.login);
    const currentUser = yield call(requestForOneUser, action.payload.login);
    yield put(dataCurrentUserSuccess(RecordUser.parse(currentUser)));
    yield put(
      dataReposSuccess(repos.map(repo => Map(RecordRepos.parse(repo))))
    );
    yield put(statusLoading(false));
  } catch (e) {
    yield put(putDataError(e.message));
  }
}

export function* watchCurrentUser() {
  yield takeLatest(idUserQuery, getCurrentUser);
}
