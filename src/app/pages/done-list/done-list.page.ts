import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  templateUrl: './done-list.page.html',
  styleUrls: ['./done-list.page.scss'],
})
export class DoneListPage implements OnInit {
  todo: Todo[] = [];
  doneIsEmpty: boolean;

  constructor(private todosService: TodosService) {
    this.todo = this.todosService.todo;
    this.doneIsEmpty = this.todosService.doneIsEmpty;
  }

  ngOnInit(): void {}
}
