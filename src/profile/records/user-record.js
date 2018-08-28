import { Record } from 'immutable';

const User = new Record({
  user: null,
  isLoading: null,
  login: null,
  avatar_url: null
});

export class RecordUser extends User {
  static parse(user) {
    const infoUser = User({
      login: user.login,
      avatar_url: user.avatar_url
    });
    return infoUser;
  }
}
