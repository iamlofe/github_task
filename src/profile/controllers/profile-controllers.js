import axios from 'axios';
import { List, Map } from 'immutable';

import { TOKEN } from '../../main/constants/app-constants';
import { RecordUser, RecordRepos } from '../records/user-record';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
export const requestForOneUser = username =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => RecordUser.parse(response.data));

export const requestForRepos = username =>
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(
      response => new List(response.data.map(repo => RecordRepos.parse(repo)))
    );

export const ReguestIssues = (username, repoName) => {
  return axios
    .get(`https://api.github.com/repos/${username}/${repoName}/issues`)
    .then(response => response);
};
