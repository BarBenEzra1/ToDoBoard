import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../tasksList/taskItem/task.model';

@Component({
  selector: 'alertsList',
  templateUrl: './alertsList.component.html',
  styleUrls: ['./alertsList.component.css']
})
export class AlertsListComponent implements OnInit {
  @Input() tasks:TaskModel[] = [];

  ngOnInit(): void {
  }

}
