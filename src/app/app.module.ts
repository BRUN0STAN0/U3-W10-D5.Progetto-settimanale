import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListPage } from './pages/todo-list/todo-list.page';
import { DoneListPage } from './pages/done-list/done-list.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoListPage, DoneListPage],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
