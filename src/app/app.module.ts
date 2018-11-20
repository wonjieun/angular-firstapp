import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

/**
 * @description
 * root module
 *
 * imports      : Module들
 * declarations : Component들
 * bootstrap    : 메인이 되는 하나의 Component
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  // root module인 app.module.ts에서 사용할 module을 추가
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
