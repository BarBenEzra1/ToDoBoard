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

  ngOnInit(): void {
  }

}