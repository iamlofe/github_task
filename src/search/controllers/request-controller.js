import axios from 'axios';
import { List } from 'immutable';

import { TOKEN } from '../../main/constants/app-constants';
import ListUsers from '../records/records';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;

export const requestSearch = login =>
  axios
    .get(`https://api.github.com/search/users?q=${login}`)
    .then(
      response =>
        new List(response.data.items.map(users => ListUsers.parse(users)))
    );
