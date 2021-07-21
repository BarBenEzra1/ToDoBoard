import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksListComponent } from '../tasksList.component';
import { TaskModel } from '../taskItem/task.model';

@Component({
  selector: 'editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css']
})

export class EditTaskComponent implements OnInit {
  @Output() taskAdded:EventEmitter<TaskModel> = new EventEmitter();

  createTaskOnButtonClick(content:string, date: Date) {
    const currentNewTask = {
       creationDate: new Date(),
       content,
       dueDate: date
    };
    this.taskAdded.emit(currentNewTask);
  }

  ngOnInit(): void {
  }

}