'use strict';

class TodoHeader {
  constructor() {
    this.template = '<div>Welcome to my todo {{name}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '@',
    };
  }
}

export default angular.module('todo.header', [])
  .directive('todoHeader', () => new TodoHeader)
  .name;