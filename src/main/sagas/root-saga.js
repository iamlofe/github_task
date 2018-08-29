import { fork } from 'redux-saga/effects';

import { watchUsers } from '../../search/sagas/search-sagas';
import { watchCurrentUser } from '../../profile/sagas/profile-saga';

export default function*() {
  yield fork(watchUsers);
  yield fork(watchCurrentUser);
}
