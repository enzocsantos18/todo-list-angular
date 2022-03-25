import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: String[] = [];
  novaTodo: String;
  constructor() {}

  ngOnInit() {
    var todosArmazenadas: String[] = JSON.parse(localStorage.getItem('todos'));
    this.todos = todosArmazenadas ? todosArmazenadas : [];
  }

  adicionar() {
    this.todos.push(this.novaTodo);
    this.novaTodo = '';
    this.updateLocalStorage();
  }

  remover(index: number) {
    this.todos.splice(index, 1);

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
