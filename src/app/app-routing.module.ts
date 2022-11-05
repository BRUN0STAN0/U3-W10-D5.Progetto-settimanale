import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneListPage } from './pages/done-list/done-list.page';
import { TodoListPage } from './pages/todo-list/todo-list.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todolist',
  },
  {
    path: 'todolist',
    component: TodoListPage,
  },
  {
    path: 'donelist',
    component: DoneListPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
