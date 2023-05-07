import { ConflictException, Injectable, NotFoundException, Inject, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseDto } from './dto/response-user.dto';
import { User} from '@project/shared/app-types';
import * as dayjs from 'dayjs';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import { BlogUserRepository } from '../blog-user/blog-user.repository';
import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from '@project/config/config-users';
import { RefreshTokenService } from '../refresh-token/refresh-token.service';
import { createJWTPayload } from '@project/util/util-core';
import * as crypto from 'node:crypto';
import UpdateUserPasswordDto from './dto/update-password.dto';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly blogUserRepository: BlogUserRepository,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        @Inject(jwtConfig.KEY) private readonly jwtOptions: ConfigType<typeof jwtConfig>,
        private readonly refreshTokenService: RefreshTokenService,
    ) {}
    public async register(dto: CreateUserDto) {
        const { email, fullname, password, dateBirth, city, role } = dto;

        const blogUser = {
            email,
            fullname,
            city,
            role,
            avatar: '',
            dateBirth: dayjs(dateBirth).toDate(),
            passwordHash: '',
            registrationDate: dayjs().toDate(),
            quantityPublishedTask: 0,
            quantityNewTask: 0,
            quantityFailedTask: 0,
            selfInfo: '',
            rating: 0,
            specialization: '',
            placeInRating: 0,    
        };

        const existUser = await this.blogUserRepository
            .findByEmail(email);

        if (existUser) {
            throw new ConflictException(AUTH_USER_EXISTS);
        }

        const userEntity = await new BlogUserEntity(blogUser)
            .setPassword(password)

        return this.blogUserRepository
            .create(userEntity);
    }

    public async verifyUser(dto: LoginUserDto) {
        const { email, password } = dto;
        const existUser = await this.blogUserRepository.findByEmail(email);

        if (!existUser) {
            throw new NotFoundException(AUTH_USER_NOT_FOUND);
        }

        const blogUserEntity = new BlogUserEntity(existUser);
        if (!await blogUserEntity.comparePassword(password)) {
            throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
        }

        return blogUserEntity.toObject();
    }

    public async getUser(id: string) {
        return this.blogUserRepository.findById(id);
    }

    public async createUserToken(user: User) {
        const accessTokenPayload = createJWTPayload(user);
        const refreshTokenPayload = { ...accessTokenPayload, tokenId: crypto.randomUUID() };
        await this.refreshTokenService.createRefreshSession(refreshTokenPayload)

        return {
            accessToken: await this.jwtService.signAsync(accessTokenPayload),
            refreshToken: await this.jwtService.signAsync(refreshTokenPayload, {
                secret: this.jwtOptions.refreshTokenSecret,
                expiresIn: this.jwtOptions.refreshTokenExpiresIn
            })
        }
    }

    public async updatePassword(_id: string, dto: UpdateUserPasswordDto) {
        const {
            email, currentPassword, newPassword,
        } = dto;

        const verifiedUser = await this.verifyUser({
            email: email,
            password: currentPassword
        });

        const userEntity =
            await new BlogUserEntity(verifiedUser).setPassword(newPassword);

        return this.blogUserRepository.update(verifiedUser._id, userEntity);
    }

    public async addResponse(id: string, responseDto: ResponseDto) {
        const existUser = await this.blogUserRepository.findById(id);

        if (!existUser) {
            throw new Error(AUTH_USER_NOT_FOUND);
        }
        existUser._responses??=[];
        existUser._responses.push(responseDto);

        const taskUserEntity = new BlogUserEntity(existUser);
        await this.blogUserRepository.update(id, taskUserEntity);
    }

    public async getByEmail(email: string): Promise<User | null> {
        const existUser = await this.blogUserRepository.findByEmail(email);
        if (!existUser) {
            throw new NotFoundException(AUTH_USER_NOT_FOUND);
        }
        return existUser;
    }
}