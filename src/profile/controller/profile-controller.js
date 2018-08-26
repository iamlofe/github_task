import axios from 'axios';

import {TOKEN} from '../../main/constants/app-constants';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
export const requestForOneUser = username =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => response.data);
