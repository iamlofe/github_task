import { Record } from 'immutable';

const User = new Record({
  user: null,
  loading: null,
  login: null,
  avatar_url: null
});
const Repos = new Record({
  repos: null,
  name: null,
  descRepo: null
});
export class RecordRepos extends Repos {
  static parse(repo) {
    const infoRepo = Repos({
      name: repo.name,
      descRepo: repo.description
    });
    return infoRepo;
  }
}
export class RecordUser extends User {
  static parse(user) {
    const infoUser = User({
      login: user.login,
      avatar_url: user.avatar_url
    });
    return infoUser;
  }
}
