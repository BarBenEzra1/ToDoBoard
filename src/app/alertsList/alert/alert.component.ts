import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/tasksList/taskItem/task.model';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() task: TaskModel;
  showTask;
  
  ngOnInit(): void {
    this.showTask = this.isEqualDates(new Date());
  }

  isEqualDates(current: Date) {
    return (current.getDate() === this.task.dueDate.getDate() &&
    current.getMonth() === this.task.dueDate.getMonth() &&
    current.getFullYear() === this.task.dueDate.getFullYear());
  }

}