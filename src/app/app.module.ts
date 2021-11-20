import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './tasksList/taskItem/task.component';
import { EditTaskComponent } from './tasksList/taskEdit/editTask.component';
import { AlertComponent } from './alertsList/alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { TasksListComponent } from './tasksList/tasksList.component';
import { AlertsListComponent } from './alertsList/alertsList.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home.component';

const appRoutes: Routes =[
  { path: 'home', component: HomeComponent },
  { path: 'newTask', component: EditTaskComponent },
  { path: 'allTasksList', component: TasksListComponent },
  { path: 'todaysTasks', component: AlertsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EditTaskComponent,
    AlertComponent,
    HeaderComponent,
    TasksListComponent,
    AlertsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
