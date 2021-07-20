import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EditTaskComponent } from './taskEditMode/editTask.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasksList/tasksList.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskComponent,
    AlertComponent,
    HeaderComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
