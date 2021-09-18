import { TaskModel } from "./tasksList/taskItem/task.model";

export class TasksService {
    tasks:TaskModel[] = [];

    addTask(date:Date, newDate:Date, content):void {
        const currentNewTask = {
            creationDate: new Date(),
            dueDate: new Date(date),
            content,
        };
        this.tasks.push(currentNewTask);
    }
}