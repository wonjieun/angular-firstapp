import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

/**
 * @description
 * 할 일 목록, 할 일 추가 전체 컴포넌트
 */
// @Component: Component decorator
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newText = '';
  todos: Todo[];

  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: false, text: '공부하기' }
    ];
  }

  ngOnInit() {
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text
    });
  }
}
