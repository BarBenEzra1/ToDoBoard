import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskModel } from '../taskItem/task.model';

@Component({
  selector: 'editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css']
})

export class EditTaskComponent implements OnInit {
  @Output() taskAdded:EventEmitter<TaskModel> = new EventEmitter();
  
  ngOnInit(): void {
  }

  createTaskOnButtonClick(content:string, date: string) {
    const currentNewTask = {
       creationDate: new Date(),
       content,
       dueDate: new Date(date),
    };
    this.taskAdded.emit(currentNewTask);
  }
}