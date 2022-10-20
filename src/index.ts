import { Users } from './services/users';
import { Logger } from './services/logger';
import { createIoCContainer } from './ioc';

import type { User, ApiConfig } from './types';

const ioc = createIoCContainer();

const renderUsers = async () => {
  const usersService = ioc.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

window.onload = (event: Event) => {
  const logger = ioc.resolve('logger');

  logger.info('Page is loaded.');

  renderUsers();
};
