import { TaskModel } from "./tasksList/taskItem/task.model";

export class TasksService {
    tasks:TaskModel[] = [];

    addTask(date:Date, newDate:Date, content):void {
        const currentNewTask = {
            creationDate: date,
            dueDate: newDate,
            content,
        };
        this.tasks.push(currentNewTask);
    }
}