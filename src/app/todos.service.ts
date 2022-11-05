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

  constructor() {}

  addTask(title: string | undefined) {
    this.id++;
    let id = this.id;
    let completed = this.completed;
    this.todo.push({ id, title, completed });
    console.log(this.todo);
  }

  taskDone(id: any) {
    this.todo[id - 1].completed = true;
    console.log(this.todo);
  }
}
