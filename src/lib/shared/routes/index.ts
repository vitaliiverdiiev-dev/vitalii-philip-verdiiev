import { routes as auth } from './auth';
import { routes as privacy } from './privacy';
import { routes as dev } from './dev';
import { routes as dashboard } from './dashboard';

import type { IAppRoute } from './types';

const routes = {
  ...auth,
  ...dashboard,
  ...privacy,
  ...dev
};

export const appRoutes: Record<keyof typeof routes, IAppRoute> = routes;

export function findRoute (pathOrName: string): IAppRoute | null {
  const keys = Object.keys(appRoutes) as Array<keyof typeof appRoutes>;

  const key = keys.find((r) => {
    if (pathOrName === routes[r].name) {
      return true;
    }

    const pathname = pathOrName
      .split('?')[0]
      .replace(/\/\d+\//g, '/*/')
      .replace(/\/\d+$/g, '/*');

    const routePath = routes[r].path('*');

    if (pathname === routePath) {
      return true;
    }

    return false;
  });

  if (!key) {
    return null;
  }

  return routes[key];
}


// interface IAppRoute {
//   path: (...args: any[]) => string,
//   meta?: {
//     needAuth?: boolean;
//     permission?: string;
//   }
// }
  
// const routes = {
//   // auth pages

// LOGOUT

// LOGIN

// SIGN UP


//   emailCheck: {
//     path: () => '/auth/email/check',
//     meta: {
//       needAuth: false
//     }  
//   },
//   emailVerified: {
//     path: () => '/auth/email/verified',
//     meta: {
//       needAuth: false
//     }  
//   },
//   resetPassword: {
//     path: () => '/auth/password/reset',
//     meta: {
//       needAuth: false
//     }
//   },
//   newPassword: {
//     path: () => '/auth/password/new',
//     meta: {
//       needAuth: false
//     }
//   },
//   forgotPassword: {
//     path: () => '/auth/password/forgot',
//     meta: {
//       needAuth: false
//     }
//   },
//   checkPasswordEmail: {
//     path: () => '/auth/password/check',
//     meta: {
//       needAuth: false
//     }
//   },
  
//   // user pages
//   dashboard: {
//     path: () => '/dashboard',
//     meta: {
//       needAuth: true
//     }
//   },
  
//   // terms pages
//   terms: {
//     path: () => '/terms',
//     meta: {
//       needAuth: false
//     }
//   },
//   privacy: {
//     path: () => '/privacy',
//     meta: {
//       needAuth: false
//     }
//   },
// TEST
// };
  
// export const appRoutes: Record<keyof typeof routes, IAppRoute> = routes;
  
// export function findRoute (pathname: string): IAppRoute | null {
//   const keys = Object.keys(appRoutes) as Array<keyof typeof appRoutes>;
  
//   const key = keys.find((r) => pathname === routes[r].path());
  
//   if (!key) {
//     return null;
//   }
  
//   return routes[key];
// }

// BEFORE 

// interface IAppRoute {
//   path: (...args: any[]) => string,
//   meta?: {
//     needAuth?: boolean;
//     permission?: string;
//   }
// }

// const routes = {
//   // auth pages
//   logout: {
//     path: () => '/auth/logout',
//     meta: {
//       needAuth: true
//     }
//   },
//   login: {
//     path: () => '/auth/login',
//     meta: {
//       needAuth: false
//     }
//   },
//   signUp: {
//     path: () => '/auth/sign-up',
//     meta: {
//       needAuth: false
//     }
//   },
//   emailCheck: {
//     path: () => '/auth/email/check',
//     meta: {
//       needAuth: false
//     }  
//   },
//   emailVerified: {
//     path: () => '/auth/email/verified',
//     meta: {
//       needAuth: false
//     }  
//   },
//   resetPassword: {
//     path: () => '/auth/password/reset',
//     meta: {
//       needAuth: false
//     }
//   },
//   newPassword: {
//     path: () => '/auth/password/new',
//     meta: {
//       needAuth: false
//     }
//   },
//   forgotPassword: {
//     path: () => '/auth/password/forgot',
//     meta: {
//       needAuth: false
//     }
//   },
//   checkPasswordEmail: {
//     path: () => '/auth/password/check',
//     meta: {
//       needAuth: false
//     }
//   },

//   // user pages
//   dashboard: {
//     path: () => '/dashboard',
//     meta: {
//       needAuth: true
//     }
//   },

//   // terms pages
//   terms: {
//     path: () => '/terms',
//     meta: {
//       needAuth: false
//     }
//   },
//   privacy: {
//     path: () => '/privacy',
//     meta: {
//       needAuth: false
//     }
//   },
//   test: {
//     path: () => '/test',
//     meta: {
//       needAuth: false
//     }
//   }
// };

// export const appRoutes: Record<keyof typeof routes, IAppRoute> = routes;

// export function findRoute (pathname: string): IAppRoute | null {
//   const keys = Object.keys(appRoutes) as Array<keyof typeof appRoutes>;

//   const key = keys.find((r) => pathname === routes[r].path());

//   if (!key) {
//     return null;
//   }

//   return routes[key];
// }
