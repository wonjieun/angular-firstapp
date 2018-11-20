import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done" /> {{ todo.text }}
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
      color: darkgray;
      background-color: white;
    }
  `]
})
export class TodoComponent implements OnInit {

  // @Input: component간에 값을 전달할 수 있게 해주는 decorator
  // @Input: 부모 컴포넌트 데이터를 전달 받음
  // todo는 Todo라는 Model의 속성을 가지고 있다.
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
