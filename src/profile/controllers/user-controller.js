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
  axios.get(`/users/${username}/repos`).then(response => {
    console.log(response.data);
    return new List(response.data.map(repo => ReposRecord.parse(repo)));
  });

export const requestDataIssues = (username, repoName) => {};

export const getIssuesData = ({ repoName, username }) => {
  return axios
    .get(`/repos/${username}/${repoName}/issues`)
    .then(response => response.data.length);
};
