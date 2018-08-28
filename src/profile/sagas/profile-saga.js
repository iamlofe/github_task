import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  getDataUser,
  dataReposSuccess,
  dataCurrentUserSuccess,
  getLenghtIssues
} from '../actions/profile-actions';

import { requestForOneUser } from '../controllers/request-user-controller';
import { requestForRepos } from '../controllers/request-repo-controller';
import { getRequestIssues } from '../controllers/request-issues-controller';
import { getDataRequestError } from '../../search/actions/search-actions';

function* getCurrentUser({ payload: { login } }) {
  try {
    const [repos, currentUser] = yield all([
      call(requestForRepos, login),
      call(requestForOneUser, login)
    ]);
    const issues = yield call(getRequestIssues, repos, login);

    yield put(getLenghtIssues(issues));
    yield put(dataCurrentUserSuccess(currentUser));
    yield put(dataReposSuccess(repos));
  } catch (e) {
    yield put(getDataRequestError(e.message));
  }
}

export function* watchCurrentUser() {
  yield takeLatest(getDataUser, getCurrentUser);
}
