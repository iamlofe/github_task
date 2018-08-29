import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  getDataUser,
  getLenghtIssues,
  dataReposSuccess,
  getRequestDataError,
  dataCurrentUserSuccess
} from '../actions/profile-actions';

import { requestDataUserUser } from '../controllers/request-user-controller';
import { requestForRepos } from '../controllers/request-repo-controller';
import { getRequestIssues } from '../controllers/request-issues-controller';

function* getCurrentUser({ payload: { login } }) {
  try {
    const [repos, currentUser] = yield all([
      call(requestForRepos, login),
      call(requestDataUserUser, login)
    ]);
    const issues = yield call(getRequestIssues, repos, login);

    yield all([
      put(getLenghtIssues(issues)),
      put(dataCurrentUserSuccess(currentUser)),
      put(dataReposSuccess(repos))
    ]);
  } catch (e) {
    yield put(getRequestDataError(e.message));
  }
}
export function* watchCurrentUser() {
  yield takeLatest(getDataUser, getCurrentUser);
}
