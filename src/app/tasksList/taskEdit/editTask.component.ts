import { Component, OnInit} from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'editTask',
  templateUrl: './editTask.component.html',
  styleUrls: ['./editTask.component.css'],
  providers: []
})

export class EditTaskComponent implements OnInit {
  
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  createTaskOnButtonClick(content:string, date: string) {
    this.tasksService.addTask(new Date(), new Date(date), content);
  }
}