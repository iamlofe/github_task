import Search from '../../search/container/search-container';
import Profile from '../../profile/container/container';

export const ROUTE = [
  {
    path: '/search',
    component: Search,
    exact: true
  },
  {
    path: '/profile',
    component: Profile,
    exact: true
  }
];

export const durationDelayRequest = 500;
