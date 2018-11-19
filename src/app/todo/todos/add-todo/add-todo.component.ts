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
    <!-- [(ngModel)]: 양방향 바인딩 -->
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText" />
    <button (click)="addTodo(newText)">Add</button>
  `,
  // --inline-style
  styles: []
})
export class AddTodoComponent implements OnInit {

  // @Output: 이벤트를 정의
  // EventEmitter(): 자식 컴포넌트의 특정 이벤트와 데이터를 발생시켜
  //                 부모 컴포넌트에서 처리 가능
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
