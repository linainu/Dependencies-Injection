import type { ApiConfig, Config, ILogger } from '../types';

export class HTTP {
  logger: ILogger;
  apiConfig: ApiConfig;

  static $inject = ['config', 'logger'];

  constructor(config: Config, logger: ILogger) {
    this.apiConfig = config.api;
    this.logger = logger;
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
