import { Category } from './category.interface';
import { Comment } from './comment.interface';

export interface Task {
    _id?: number;
    title: string;
    description: string;
    category: Category;
    cost?: number;
    dueDate?: Date;
    createdAt: Date;
    status: string;
    picture?: string;
    address?:string;  
    tagSet?: string[];
    city: string;
    userId: string;
    comments?: Comment[];   
}
