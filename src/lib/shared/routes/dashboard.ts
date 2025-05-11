import { IAppRoute } from './types';

type IRouteNames = 'dashboard';

export const routes: Record<IRouteNames, IAppRoute> = {
  dashboard: {
    name: 'dashboard',
    path: () => '/dashboard',
    meta: {
      needAuth: true
    }
  }
};
