import { IAppRoute } from './types';

type IRouteNames = 'logout'
| 'login'
| 'signUp' | 'checkConfirmation' | 'emailConfirmation' | 'emailConfirmed'
| 'forgotPassword' | 'checkResetEmail' | 'changePassword' | 'passwordChanged'
| 'authError';

export const routes: Record<IRouteNames, IAppRoute> = {
  logout: {
    name: 'logout',
    path: () => '/auth/logout',
    meta: {
      needAuth: true
    }
  },
  login: {
    name: 'login',
    path: () => '/auth/login',
    meta: {
      needAuth: false
    }
  },
  signUp: {
    name: 'signUp',
    path: () => '/auth/sign-up',
    meta: {
      needAuth: false
    }
  },
  
  checkConfirmation: {
    name: 'checkConfirmation',
    path: () => '/auth/email/check/confirmation',
    meta: {
      needAuth: false
    }
  },
  emailConfirmation: {
    name: 'emailConfirmation',
    path: () => '/auth/confirm/email',
    meta: {
      needAuth: false
    }
  },
  emailConfirmed: {
    name: 'emailConfirmed',
    path: () => '/auth/email/confirmed',
    meta: {
      needAuth: false
    }
  },

  forgotPassword: {
    name: 'forgotPassword',
    path: () => '/auth/password/forgot',
    meta: {
      needAuth: false
    }
  },
  checkResetEmail: {
    name: 'checkResetEmail',
    path: () => '/auth/password/check/email',
    meta: {
      needAuth: false
    }
  },
  changePassword: {
    name: 'changePassword',
    path: () => '/auth/password/change',
    meta: {
      needAuth: false
    }
  },
  passwordChanged: {
    name: 'passwordChanged',
    path: () => '/auth/password/changed',
    meta: {
      needAuth: false
    }
  },

  authError: {
    name: 'authError',
    path: (error: string) => `/auth/error?error=${error}`,
    meta: {
      needAuth: false
    }
  }
};
