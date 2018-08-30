import {
  call,
  put,
  takeLatest,
  all,
  select,
  fork,
  take,
  takeEvery
} from 'redux-saga/effects';

import {
  getDataUser,
  getDataUserError,
  dataReposSuccess,
  dataCurrentUserSuccess,
  getLenghtIssues
  // getLenghtIssues
} from '../actions/profile-actions';

import {
  requestDataUser,
  requestDataRepos,
  getIssuesData
} from '../controllers/user-controller';

const getLogin = state => state.userReducer.get('login');

const getRepos = state => state.userReducer.get('repos');
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

function* getIssues({ payload: { repos } }) {
  try {
    const username = yield select(getLogin);
    for (let i = 0; i < repos.count(); i++) {
      if (repos.getIn([i, 'has_issues'])) {
        const count = yield call(getIssuesData, {
          repoName: repos.getIn([i, 'name']),
          username: username
        });
        // put(getLenghtIssues({ nameRepo: repos.getIn([i, 'name']), count }));
        yield put(getLenghtIssues({ index: i, count }));
      } else {
        // put(getLenghtIssues({ nameRepo: repos.getIn([i, 'name']), count: 0 }));
        yield put(getLenghtIssues({ index: i, count: 0 }));
      }
    }
  } catch (e) {
    yield put(getDataUserError(e.message));
  }
}
export function* watchCurrentUser() {
  yield takeLatest(getDataUser, getCurrentUser);
  yield takeLatest(dataReposSuccess, getIssues);
  yield takeEvery(getLenghtIssues, getIssues);

  // yield takeEvery();
}
