export interface Comment {
    id?: number;
    createdAt: Date;
    message: string;
    userId: string;
    taskId: number;   
}