export class Task {
    taskId: number;
    title: string;
    completed: boolean;


    constructor(TaskId: number, Title: string, Completed: boolean){
        this.taskId = TaskId;
        this.title = Title,
        this.completed = Completed;
    }
}
