export interface IAppRoute {
  name: string;
  path: (...args: any[]) => string; // eslint-disable-line @typescript-eslint/no-explicit-any
  meta: {
    needAuth?: boolean;
    permission?: string;
  }
}
