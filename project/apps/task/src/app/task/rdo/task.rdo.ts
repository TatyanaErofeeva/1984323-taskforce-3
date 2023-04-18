import { TaskStatus} from '@project/shared/app-types';
import { Expose } from 'class-transformer';

export class TaskRdo {
    @Expose()
    public id: string;

    @Expose()
    public title: string;

    @Expose()
    public description: string;

    @Expose()
    public category: string;

    @Expose()
    public cost: number;

    @Expose()
    public dueDate: Date;

    @Expose()
    public createdAt: Date;

    @Expose()
    public status: TaskStatus;

    @Expose()
    public picture: string;

    @Expose()
    public address: string;

    @Expose()
    public tagsSet: string[];

    @Expose()
    public city: string;

    @Expose()
    public userId: string;
}