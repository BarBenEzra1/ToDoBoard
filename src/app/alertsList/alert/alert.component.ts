import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/tasksList/taskItem/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() task: TaskModel; 
  @Input() ind;
  date = new DatePipe('en-US').transform(this.task.dueDate, 'yyyy-dd-MM');
  currentDate = new DatePipe('en-US').transform(new Date(), 'yyyy-dd-MM');
  todaysTask:TaskModel = ((this.date == this.currentDate) ? this.task : null);

  ngOnInit(): void {
  }

}