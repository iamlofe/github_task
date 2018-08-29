import { Record } from 'immutable';

const User = new Record({
  user: null,
  login: null,
  userError: null,
  avatar_url: null,
  isLoadingUser: null
});

export class RecordUser extends User {
  static parse(user) {
    return User({
      login: user.login,
      avatar_url: user.avatar_url
    });
  }
}
