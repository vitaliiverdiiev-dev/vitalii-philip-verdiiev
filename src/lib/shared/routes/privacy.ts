import { IAppRoute } from './types';

type IRouteNames = 'terms' | 'privacy';

export const routes: Record<IRouteNames, IAppRoute> = {
  terms: {
    name: 'terms',
    path: () => '/terms',
    meta: {}
  },
  privacy: {
    name: 'privacy',
    path: () => '/privacy',
    meta: {}
  }
};
