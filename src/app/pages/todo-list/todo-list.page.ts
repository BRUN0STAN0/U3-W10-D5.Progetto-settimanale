import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  todo: Todo[] = [];
  title?: string;
  id = 0;

  todoIsEmpty: boolean;

  constructor(private todosService: TodosService) {
    this.todo = this.todosService.todo;
    this.todoIsEmpty = this.todosService.todoIsEmpty;
  }

  ngOnInit(): void {}

  addTask(str: string | undefined) {
    this.todosService.addTask(str);
  }

  taskDone(id: any) {
    this.todosService.taskDone(id);
  }
}
