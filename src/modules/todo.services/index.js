'use strict';

class TodosService {
  constructor() {
    this.todos = [];
  }

  markDone(todo) {
    todo.done = true;
  }
}

export default angular.module('todo.services', [])
  .service('TodosService', () => new TodosService)
  .name;