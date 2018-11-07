import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**
 * @description
 * 할 일 추가 input, button
 *
 * [(ngModel)]="항목"
 * "input"과 "component class의 항목값"을 양방향으로 연결 (양방향 바인딩)
 * 해당 데이터(항목)가 실시간으로 변화
 *
 *
 */
@Component({
  selector: 'app-add-todo',
  // --inline-template
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText" />
    <button (click)="addTodo(newText)">Add</button>
  `,
  // --inline-style
  styles: []
})
export class AddTodoComponent implements OnInit {

  @Output() TodoAdded = new EventEmitter();
  newText: string;

  constructor() { }

  ngOnInit() {
  }

  // 할 일 추가 button event
  addTodo(newText: string) {
    this.TodoAdded.emit(newText);
    this.newText = '';
  }
}
