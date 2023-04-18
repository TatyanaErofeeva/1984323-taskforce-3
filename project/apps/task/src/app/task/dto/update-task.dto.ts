export class UpdateTaskDto {
    public title?: string;
    public description?: string;
    public category?: string;
    public cost?: number;
    public dueDate?: Date;
    public status?: string;
    public picture?: string;
    public address?: string;
    public tagsSet?: string[];
    public city?: string;
}