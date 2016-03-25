'use strict';

import './index.scss';
import 'materialize-css/dist/js/materialize.js';

import 'angular/angular';
import 'angular-ui-router/release/angular-ui-router';

import TodoMain from './modules/todo.main';

const app = angular.module('todoApp', [
  'ui.router',
  TodoMain
])
.config(($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/main');
});