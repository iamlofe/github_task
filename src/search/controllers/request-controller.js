import axios from 'axios';

import {TOKEN} from '../constants/query-search';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
export const requestSearch = query =>
  axios
    .get(`https://api.github.com/search/users?q=${query}`)
    .then(response => response.data.items);

export const requestForOneUser = username =>
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => response);
