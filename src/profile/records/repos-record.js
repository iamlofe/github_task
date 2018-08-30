import { Record } from 'immutable';

const RepoRecord = new Record({
  name: null,
  issues: null,
  descRepo: null,
  has_issues: null
});

export class ReposRecord extends RepoRecord {
  static parse(repo) {
    return new ReposRecord({
      name: repo.name,
      descRepo: repo.description,
      has_issues: repo.has_issues
    });
  }
}
