'use strict';

import TodoHeader from '../todo.header';
import TodoList from '../todo.list';
import TodoServices from '../todo.services';

import MainController from './main.controller.js';

export default angular.module('todo.main', [
  TodoHeader,
  TodoList,
  TodoServices
])
  .controller('MainController', MainController)
  .config(routing)
  .name;

function routing($stateProvider) {
  $stateProvider
    .state('/main', {
      url: '/main',
      template: require('./main.html'),
      controller: 'MainController',
      controllerAs: 'vm'
    });
}