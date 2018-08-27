import { Record } from 'immutable';

const User = Record({
  user: null,
  loading: null,
  login: null,
  avatar_url: null
});
const Repos = Record({
  repos: null,
  name: null,
  descRepo: null
});
export class RecordRepos extends Repos {
  static parse(repo) {
    const infoRepo = new Repos({
      name: repo.name,
      descRepo: repo.description
    });
    return infoRepo;
  }
}
export class RecordUser extends User {
  static parse(user) {
    const infoUser = new User({
      login: user.login,
      avatar_url: user.avatar_url,
      loading: true
    });
    return infoUser;
  }
}
