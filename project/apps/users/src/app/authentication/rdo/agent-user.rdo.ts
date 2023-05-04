import { Expose} from 'class-transformer';
import { UserRole, City } from '@project/shared/app-types';



export class AgentUserRdo {
    @Expose()
    firstname: string;

    @Expose({ name: '_id' })
    id: string;

    @Expose()
    createdAt: Date;

    @Expose()
    city: City;

    @Expose()
    age: number;

    @Expose()
    role: UserRole;

    @Expose()
    rating: number;

    @Expose()
    quantityCompletedTask: number;

    @Expose()
    quantityFailedTask: number;

    @Expose()
    email: string;

    @Expose()
    selfInfo: string;

    @Expose()
    specialization: string;

    @Expose()
    placeInRating: number;
}