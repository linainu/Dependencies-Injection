import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  // you can register some resources right now below...
  ioc.registerClass('logger', Logger);

  ioc.registerClass('http', HTTP);

  ioc.registerClass('users', Users);

  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  ioc.register('config', config);

  return ioc;
};
