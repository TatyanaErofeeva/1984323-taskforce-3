import { Category } from "@project/shared/app-types";

export class CreateTaskDto {
    public title: string;
    public description: string;
    public category: Category;
    public cost?: number;
    public dueDate?: Date;
    public createdAt: Date;
    public status: string;
    public picture?: string;
    public address?: string;
    public tagsSet?: string[];
    public city: string;
    public userId: string;
}