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

export const requestCurrentIssues = ({ repoName, login }) =>
  axios
    .get(`/repos/${login}/${repoName}/issues`)
    .then(response => response.data.length);
