import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { AuthUser } from '../authentication.constant';

export class LoginUserDto {
    @ApiProperty({
        description: 'User uniq email',
        example: 'user@user.ru',
    })
    @IsEmail({}, { message: AuthUser.EmailNotValid })
    public email: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
    })
    @IsString()
    public password: string;
}