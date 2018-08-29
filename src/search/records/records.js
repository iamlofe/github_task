import { Record } from 'immutable';

const Users = Record({
  query: null,
  users: null,
  login: null,
  avatar_url: null,
  id: null,
  isLoading: null
});

export default class ListUsers extends Users {
  static parse(user) {
    return new Users({
      login: user.login,
      avatar_url: user.avatar_url,
      id: user.id
    });
  }
}
