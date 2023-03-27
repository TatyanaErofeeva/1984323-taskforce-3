export interface Task {
    _id?: string;
    title: string;
    description: string;
    category: string;
    cost?: number;
    dueDate?: Date;
    picture?: string;
    address?:string;  
    tagsSet?: string[];
    city?: string;
}
