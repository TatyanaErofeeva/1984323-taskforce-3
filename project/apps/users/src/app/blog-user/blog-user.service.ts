import { Injectable, NotFoundException } from '@nestjs/common';
import { AUTH_USER_NOT_FOUND } from '../authentication/authentication.constant';
import { UpdateUserDto } from './dto/update-user.dto';
import { BlogUserEntity } from './blog-user.entity';
import { BlogUserRepository } from './blog-user.repository';

@Injectable()
export class BlogUserService {
    constructor(
        private readonly blogUserRepository: BlogUserRepository
    ) { }

    /** Изменение данных о пользователе*/
    public async update(id: string, dto: UpdateUserDto) {
        const blogUser = await this.blogUserRepository.findById(id);
        if (!blogUser) {
            throw new NotFoundException(AUTH_USER_NOT_FOUND);
        }

        const blogUserEntity = new BlogUserEntity({ ...blogUser, ...dto });
        return this.blogUserRepository.update(id, blogUserEntity);
    }

    /** Информация о пользователе*/
    public async getUser(id: string) {
        return this.blogUserRepository.findById(id);
    }

}