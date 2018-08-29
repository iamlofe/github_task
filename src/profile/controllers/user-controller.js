import { call, all } from 'redux-saga/effects';
import { List } from 'immutable';

import axios from '../../main/tools/request-tool';

import { CurrentUserRecord } from '../records/user-record';
import { ReposRecord } from '../records/repos-record';

export const requestDataUser = username =>
  axios
    .get(`/users/${username}`)
    .then(response => CurrentUserRecord.parse(response.data));

export const requestDataRepos = username =>
  axios
    .get(`/users/${username}/repos`)
    .then(
      response => new List(response.data.map(repo => ReposRecord.parse(repo)))
    );

export const requestDataIssues = (username, repoName) => {
  axios
    .get(`/repos/${username}/${repoName}/issues`)
    .then(response => response.data.length);
};

export function* getRequestIssues(repos, login) {
  return new List(
    yield all(repos.map(repo => call(requestDataIssues, login, repo.name)))
  );
}
