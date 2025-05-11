import { IAppRoute } from './types';

type IRouteNames = 'test';

export const routes: Record<IRouteNames, IAppRoute> = {
  test: {
    name: 'test',
    path: () => '/test',
    meta: {
    }
  }
};
