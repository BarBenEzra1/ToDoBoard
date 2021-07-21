import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from './task.model';

@Component({
  selector: 'single-row',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel; 
  @Input() ind;
  
  ngOnInit(): void {
  }

}