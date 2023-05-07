import { UserRole } from './user-role.enum';
import { Response } from './response.interface';

export interface User {
    _id?: string;
    fullname: string;
    email: string;
    city: string;
    passwordHash: string;
    role: UserRole;
    avatar: string;
    dateBirth:Date;

    registrationDate:Date;
    quantityPublishedTask: number;
    quantityNewTask: number;
    quantityFailedTask: number;
    selfInfo: string;
    rating: number;
    specialization: string;
    placeInRating: number;
    _responses?: Response[];    
}
