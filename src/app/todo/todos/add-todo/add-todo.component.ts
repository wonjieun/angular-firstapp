import { Component, OnInit, EventEmitter, Output } from '@angular/core';

/**
 * @description
 * 할 일 추가 input, button
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
