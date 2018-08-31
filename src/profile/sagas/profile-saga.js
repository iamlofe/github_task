import {
  call,
  put,
  takeLatest,
  all,
  select,
  takeEvery
} from 'redux-saga/effects';

import {
  getDataUser,
  getDataUserError,
  dataReposSuccess,
  dataCurrentUserSuccess,
  setIssueCount,
  setInfoForController
} from '../actions/profile-actions';

import {
  requestDataUser,
  requestDataRepos,
  requestCurrentIssues
} from '../controllers/user-controller';

import { getLoginSelector } from '../selectors/login-selectors';

function* getCurrentUserInfo({ payload: { login } }) {
  try {
    const [repos, user] = yield all([
      call(requestDataRepos, login),
      call(requestDataUser, login)
    ]);

    yield all([
      put(dataCurrentUserSuccess(user)),
      put(dataReposSuccess(repos))
    ]);
  } catch (e) {
    yield put(getDataUserError(e.message));
  }
}

function* fetchReposIssues({ payload: { repos } }) {
  try {
    const login = yield select(getLoginSelector);

    yield* repos.map((repo, i) =>
      put(
        setInfoForController({
          index: i,
          login: login,
          repoName: repo.get('name')
        })
      )
    );
  } catch (e) {
    yield put(getDataUserError(e.message));
  }
}

function* getIssue({ payload: { login, index, repoName } }) {
  const count = yield call(requestCurrentIssues, {
    repoName,
    login
  });
  const currentLogin = yield select(getLoginSelector);
  if (currentLogin) {
    yield put(setIssueCount({ index, count }));
  }
}

export function* watchCurrentUser() {
  yield takeLatest(getDataUser, getCurrentUserInfo);
  yield takeLatest(dataReposSuccess, fetchReposIssues);
  yield takeEvery(setInfoForController, getIssue);
}
