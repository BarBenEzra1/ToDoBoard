import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from './taskItem/task.model';

@Component({
  selector: 'tasksList',
  templateUrl: './tasksList.component.html',
  styleUrls: ['./tasksList.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks:TaskModel[] = [];
  @Input() amount:number;

  ngOnInit(): void {
  }
}