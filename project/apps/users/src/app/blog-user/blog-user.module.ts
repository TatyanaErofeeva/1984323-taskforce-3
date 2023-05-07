import { Module } from '@nestjs/common';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';
import { BlogUserRepository } from './blog-user.repository';

@Module({
    imports: [MongooseModule.forFeature([
        { name: BlogUserModel.name, schema: BlogUserSchema }
    ])],
    providers: [BlogUserRepository, BlogUserService],
    exports: [BlogUserRepository],
    controllers: [BlogUserController],
})
export class BlogUserModule { }
