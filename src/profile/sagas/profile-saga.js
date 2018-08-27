import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  dataCurrentUserSuccess,
  idUserQuery,
  dataReposSuccess
} from '../actions/profile-actions';
import {
  requestForOneUser,
  requestForRepos
} from '../controllers/profile-controllers';

import { onGetDataRequestError } from '../../search/actions/search-actions';

function* getCurrentUser(action) {
  try {
    const [repos, currentUser] = yield all([
      call(requestForRepos, action.payload.login),
      call(requestForOneUser, action.payload.login)
    ]);
    yield put(dataCurrentUserSuccess(currentUser));
    yield put(dataReposSuccess(repos));
  } catch (e) {
    yield put(onGetDataRequestError(e.message));
  }
}

export function* watchCurrentUser() {
  yield takeLatest(idUserQuery, getCurrentUser);
}
