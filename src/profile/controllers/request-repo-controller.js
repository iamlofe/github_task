import { List } from 'immutable';

import axios from '../../main/connect-api/connect-api';
import { RecordRepos } from '../records/repos-record';

export const requestForRepos = username =>
  axios
    .get(`/users/${username}/repos`)
    .then(response => response.data.map(repo => RecordRepos.parse(repo)));
