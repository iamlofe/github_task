import axios from '../../main/connect-api/connect-api';
import { RecordUser } from '../records/user-record';

export const requestDataUserUser = username =>
  axios
    .get(`/users/${username}`)
    .then(response => RecordUser.parse(response.data));
