import { UserRole } from './user-role.enum';

export interface TokenPayload {
    sub: string;
    email: string;
    role: UserRole;
    fullname: string;
}