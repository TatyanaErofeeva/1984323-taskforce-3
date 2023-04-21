import { Entity } from '@project/util/util-types';
import { Category, Task, Comment} from '@project/shared/app-types';

export class TaskEntity implements Entity<TaskEntity>, Task {
    public id: number;
    public title: string;
    public description: string;
    public category: Category;
    public cost?: number;
    public dueDate?: Date;
    public createdAt: Date;
    public status: string;
    public picture?: string;
    public address?: string;
    public tagSet?: string[];
    public city: string;
    public userId: string;
    public comments?: Comment[];
    

    constructor(task: Task) {
        this.fillEntity(task);
    }

    public fillEntity(entity: Task): void {
        this.title = entity.title;
        this.description = entity.description;
        this.category = entity.category;
        this.cost = entity?.cost;
        this.dueDate = entity.dueDate;
        this.createdAt = entity.createdAt;
        this.status = entity.status;
        this.picture = entity?.picture;
        this.address = entity?.address;
        this.tagSet = entity.tagSet;
        this.city = entity.city;
        this.userId = entity.userId;
        this.comments = [];
    }

    public toObject(): TaskEntity {
        return {
            ...this,
            category: this.category,
            comments: [...this.comments],
        };
    }

}