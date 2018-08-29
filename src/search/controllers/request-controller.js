import { List } from 'immutable';

import ListUsers from '../records/records';
import axios from '../../main/connect-api/connect-api';

export const requestSearchUsers = login =>
  axios
    .get(`/search/users?q=${login}`)
    .then(
      response =>
        new List(response.data.items.map(users => ListUsers.parse(users)))
    );
