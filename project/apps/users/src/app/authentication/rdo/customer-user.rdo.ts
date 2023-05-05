import { City, UserRole } from '@project/shared/app-types';
import { Expose } from 'class-transformer';

export class CustomerUserRdo {
    @Expose()
    firstname: string;

    @Expose({ name: '_id' })
    id: string;

    @Expose()
    createdAt: Date;

    @Expose()
    city: City;

    @Expose()
    email: string;

    @Expose()
    quantityPublishedTask: number;

    @Expose()
    quantityNewTask: number;

    @Expose()
    selfInfo: string;

    @Expose()
    role: UserRole;
}