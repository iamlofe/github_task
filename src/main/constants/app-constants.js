import Search from '../../search/container/search-container';
import Profile from '../../profile/container/container';

export const ROUTE = [
  {
    path: '/search',
    component: Search,
    exact: true
  },
  {
    path: '/user/:id',
    component: Profile,
    exact: true
  }
];

export const TOKEN = `e993d4bc54c9c63b4fa4964f2760b99f68b90936`;

export const durationDelayRequest = 500;
