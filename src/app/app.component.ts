import { Component } from '@angular/core';
import { TaskModel } from './tasksList/taskItem/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoBoard';
  tasks:TaskModel[] = [];

  addNewTask(task:TaskModel):void {
    this.tasks.push(task);
  }
}