import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { TaskModel } from '../tasksList/taskItem/task.model';

@Component({
  selector: 'alertsList',
  templateUrl: './alertsList.component.html',
  styleUrls: ['./alertsList.component.css']
})
export class AlertsListComponent implements OnInit {
  tasks:TaskModel[];

  constructor(private tasksService:TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

}
