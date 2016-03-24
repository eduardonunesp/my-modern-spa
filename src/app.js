'use strict';

import 'angular/angular.min';
import 'angular-ui-router/release/angular-ui-router.min';
import TodoMain from './modules/todo.main';

const app = angular.module('todoApp', [
  'ui.router',
  TodoMain
])
.config(($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/main');
});