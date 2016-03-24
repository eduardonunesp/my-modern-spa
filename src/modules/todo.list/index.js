'use strict';

import TodoServices from '../todo.services';

const Q = new WeakMap();

class TodoList {
  constructor(TodosService) {
    Q.set(this, TodosService);
    this.template = require('./todo.list.html');
    this.restrict = 'E';
    this.scope = {
      list: '=',
    };
  }

  link(scope) {
    scope.TodosService = Q.get(TodoList.instance);
  }

  static directiveFactory(TodosService){
    TodoList.instance = new TodoList(TodosService);
    return TodoList.instance;
  }
}

TodoList.directiveFactory.$inject = ['TodosService'];

export default angular.module('todo.list', [
  TodoServices
])
  .directive('todoList', TodoList.directiveFactory)
  .name;