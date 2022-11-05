import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todo: Todo[] = [
    // {
    //   id: 1,
    //   title: 'We',
    //   completed: true,
    // },
    // {
    //   id: 2,
    //   title: 'We 2',
    //   completed: false,
    // },
  ];

  id = 0;
  completed = false;
  doneIsEmpty = true;
  todoIsEmpty = true;

  constructor() {}

  addTask(title: string | undefined) {
    this.todoIsEmpty = false;
    this.id++;
    let id = this.id;
    let completed = this.completed;
    this.todo.push({ id, title, completed });
  }

  taskDone(id: any) {
    this.doneIsEmpty = false;
    this.todo[id - 1].completed = true;
  }
}
