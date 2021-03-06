import { List } from 'immutable';

import ListUsers from '../records/records';

import axios from '../../main/tools/request-tool';

export const requestSearchUsers = login => {
  if (login) {
    return axios
      .get(`/search/users?q=${login}`)
      .then(
        response =>
          new List(response.data.items.map(users => ListUsers.parse(users)))
      );
  }

  return new List();
};
