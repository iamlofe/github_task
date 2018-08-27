import axios from 'axios';

import { TOKEN } from '../../main/constants/app-constants';

axios.defaults.headers.common.Authorization = `token ${TOKEN}`;

export const requestSearch = login =>
  axios
    .get(`https://api.github.com/search/users?q=${login}`)
    .then(response => response.data.items);
