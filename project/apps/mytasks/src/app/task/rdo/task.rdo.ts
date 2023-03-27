import { Expose } from 'class-transformer';

export class TaskRdo {
    @Expose({ name: '_id' })
    id: string;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    category: string;

    @Expose()
    cost: number;

    @Expose()
    dueDate?: Date;

    @Expose()
    picture: string;

    @Expose()
    address: string;

    @Expose()
    tagsSet: string[];
}