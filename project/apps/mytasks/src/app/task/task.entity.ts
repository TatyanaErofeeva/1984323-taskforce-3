import { Task } from '@project/shared/app-types';

export class TaskEntity implements Task {
    public _id: string;
    public title: string;
    public description: string;
    public category: string;
    public cost?: number;
    public dueDate?: Date;
    public picture?: string;
    public address?: string;
    public tagsSet?: string[];
    public city?: string;

    constructor(task: Task) {
        this.fillEntity(task);
    }

    public toObject() {
        return { ...this };
    }

    public fillEntity(task: Task) {
        this._id = task._id;
        this.title = task.title;
        this.description = task.description;
        this.category = task.category;
        this.cost = task.cost;
        this.dueDate = task.dueDate;
        this.picture = task.picture;
        this.address = task.address;
        this.tagsSet = task.tagsSet;
        this.city = task.city;

    }
}