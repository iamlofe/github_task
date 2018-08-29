import { Record, List } from 'immutable';

const User = new Record({
  login: null,
  avatar_url: null,
  isLoadingUser: true,
  repos: new List()
});

export class CurrentUserRecord extends User {
  static parse(user) {
    return new CurrentUserRecord({
      login: user.login,
      avatar_url: user.avatar_url
    });
  }
}
