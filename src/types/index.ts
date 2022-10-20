export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface Config {
  api: ApiConfig;
}

export interface ILogger {
  info: (message: string) => void;
  error: (message: string) => void;
}

export interface IHttp {
  get: (url: string) => unknown;
}
