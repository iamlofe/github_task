import { Record } from 'immutable';

const Users = Record({
  query: null,
  users: null,
  login: null,
  avatarUrl: null,
  id: null,
  isLoading: null
});

export default class ListUsers extends Users {
  static parse(user) {
    return new Users({
      login: user.login,
      avatarUrl: user.avatar_url,
      id: user.id
    });
  }
}
