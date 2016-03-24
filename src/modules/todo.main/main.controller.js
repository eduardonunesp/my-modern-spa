'use strict';

class MainController {
  constructor($log, TodosService) {
    this.$log = $log;
    this.TodosService = TodosService;

    this.$log.debug('Constructor at MainController');
  }

  addNewTodo(todo) {
    this.$log.debug('New todo', todo);
    todo.done = false;
    this.TodosService.todos.push(angular.copy(todo));
    todo.title = '';
  }
}

MainController.$inject = ['$log', 'TodosService'];

export default MainController;
