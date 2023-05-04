import { User, UserRole, Response} from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
    public _id: string;
    public fullname: string;
    public email: string;
    public city: string;
    public passwordHash: string;
    public role: UserRole;
    public avatar: string;
    public dateBirth: Date;
    public _responses: Response[];

    constructor(blogUser: User) {
        this.fillEntity(blogUser);
    }

    public toObject() {
        return { ...this };
    }

    public fillEntity(blogUser: User) {
        this._id = blogUser._id;
        this.fullname = blogUser.fullname;
        this.email = blogUser.email;
        this.city = blogUser.city;
        this.passwordHash = blogUser.passwordHash;
        this.role = blogUser.role;
        this.avatar = blogUser.avatar;
        this.dateBirth = blogUser.dateBirth;
        this._responses = blogUser._responses;   
    }

    public async setPassword(password: string): Promise<BlogUserEntity> {
        const salt = await genSalt(SALT_ROUNDS);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async comparePassword(password: string): Promise<boolean> {
        return compare(password, this.passwordHash);
    }
}