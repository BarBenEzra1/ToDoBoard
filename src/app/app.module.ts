import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './tasksList/taskItem/task.component';
import { EditTaskComponent } from './tasksList/taskEdit/editTask.component';
import { AlertComponent } from './alertsList/alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasksList/tasksList.component';
import { AlertsListComponent } from './alertsList/alertsList.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskComponent,
    AlertComponent,
    HeaderComponent,
    TasksListComponent,
    AlertsListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
