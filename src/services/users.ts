import type { ApiConfig, Config, User, IHttp } from '../types';

export class Users {
  http: IHttp;
  apiConfig: ApiConfig;

  static $inject = ['config', 'http'];

  constructor(config: Config, http: IHttp) {
    this.http = http;
    this.apiConfig = config.api;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
