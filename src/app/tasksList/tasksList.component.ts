import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { TaskModel } from './taskItem/task.model';

@Component({
  selector: 'tasksList',
  templateUrl: './tasksList.component.html',
  styleUrls: ['./tasksList.component.css'],
  providers: []
})
export class TasksListComponent implements OnInit {
  tasks:TaskModel[];
  amount:number;

  constructor(private tasksService:TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
    this.amount = this.tasksService.tasks.length;
  }

  trackByIndex(index, task){     
    return index;
  }
}