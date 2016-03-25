'use strict';

class TodoHeader {
  constructor() {
    this.template = require('./todo.header.html');
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      name: '@',
    };
  }
}

export default angular.module('todo.header', [])
  .directive('todoHeader', () => new TodoHeader)
  .name;