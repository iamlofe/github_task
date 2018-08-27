import axios from 'axios';

import { TOKEN } from '../../main/constants/app-constants';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
export const requestForOneUser = username =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => response.data);

export const requestForRepos = username =>
  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(response => response.data);

export const ReguestIssues = (username, repoName) => {
  console.log(username);
  console.log(repoName);
  return axios
    .get(`https://api.github.com/repos/${username}/${repoName}/issues`)
    .then(response => response);
};
