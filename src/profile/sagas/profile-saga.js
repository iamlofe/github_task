import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
  getDataUser,
  getDataUserError,
  dataReposSuccess,
  dataCurrentUserSuccess
  // getLenghtIssues
} from '../actions/profile-actions';

import {
  requestDataUser,
  requestDataRepos
  // getRequestIssues
} from '../controllers/user-controller';

function* getCurrentUser({ payload: { login } }) {
  try {
    const [repos, user] = yield all([
      call(requestDataRepos, login),
      call(requestDataUser, login)
    ]);
    // const issues = yield call(getRequestIssues, repos, login);

    yield all([
      put(dataCurrentUserSuccess(user)),
      put(dataReposSuccess(repos))
      // put(getLenghtIssues(issues))
    ]);
  } catch (e) {
    yield put(getDataUserError(e.message));
  }
}
export function* watchCurrentUser() {
  yield takeLatest(getDataUser, getCurrentUser);
}
