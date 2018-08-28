import { List } from 'immutable';
import { call, all } from 'redux-saga/effects';

import axios from '../../main/connect-api/connect-api';

export function* getRequestIssues(repos, login) {
  return new List(
    yield all(repos.map(repo => call(requestIssuesCount, login, repo.name)))
  );
}

const requestIssuesCount = (username, repoName) =>
  axios
    .get(`/repos/${username}/${repoName}/issues`)
    .then(response => response.data.length);
