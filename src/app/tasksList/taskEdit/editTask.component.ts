import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksListComponent } from '../tasksList.component';
import { TaskModel } from '../taskItem/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css']
})

export class EditTaskComponent implements OnInit {
  @Output() taskAdded:EventEmitter<TaskModel> = new EventEmitter();

  constructor(public datepipe: DatePipe){}

  createTaskOnButtonClick(content:string, date: string) {
    const currentNewTask = {
       creationDate: new Date(),
       content,
       dueDate: new Date(date),
    };
    this.taskAdded.emit(currentNewTask);
  }

  ngOnInit(): void {
  }

}