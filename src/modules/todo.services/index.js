'use strict';

class TodosService {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.todos = [];
  }

  markDone(todo) {
    this.$timeout(function() {
      todo.done = true
    }, 500);
  }
}

TodosService.$inject = ['$timeout'];

export default angular.module('todo.services', [])
  .service('TodosService', TodosService)
  .name;