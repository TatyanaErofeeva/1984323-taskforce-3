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
    _responses?: Response[];    
}
