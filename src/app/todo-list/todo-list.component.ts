import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: String[] = ['teste', 'teste2', 'teste 3'];

  constructor() {}

  ngOnInit() {}

  adicionar(todo: String) {
    this.todos.push(todo);
  }

  remover(index: number) {
    this.todos.splice(index, 1);
  }

  updateLocalStorage() {
    localStorage.setItem('todos', this.todos.toString());
  }
}
