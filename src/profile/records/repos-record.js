import { Record } from 'immutable';

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
