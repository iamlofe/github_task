import { Record, List } from 'immutable';

const User = new Record({
  login: null,
  avatarUrl: null,
  isLoadingUser: true,
  repos: new List()
});

export class CurrentUserRecord extends User {
  static parse(user) {
    return new CurrentUserRecord({
      login: user.login,
      avatarUrl: user.avatar_url
    });
  }
}
