import Search from '../../search/container/search-container';
import Profile from '../../profile/container/container';

export const ROUTES = [
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
