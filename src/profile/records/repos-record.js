import { Record } from 'immutable';

const Repos = new Record({
  name: null,
  repos: null,
  descRepo: null,
  reposError: null,
  isLoadingRepos: null
});

export class RecordRepos extends Repos {
  static parse(repo) {
    return Repos({
      name: repo.name,
      descRepo: repo.description
    });
  }
}
