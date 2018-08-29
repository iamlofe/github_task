import axios from 'axios';

import { TOKEN } from '../constants/app-constants';

const instance = axios.create({
  baseURL: 'https://api.github.com'
});
instance.defaults.headers.common.Authorization = `token ${TOKEN}`;

export default instance;
