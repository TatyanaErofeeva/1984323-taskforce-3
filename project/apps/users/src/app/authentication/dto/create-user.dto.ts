import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISO8601, IsString, Length } from 'class-validator';
import { AUTH_USER_DATE_BIRTH_NOT_VALID, AUTH_USER_EMAIL_NOT_VALID, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../authentication.constant';

export class CreateUserDto {
    @ApiProperty({
        description: 'User Fullname',
        example: 'Ivan Ivanov',
    })
    @IsString()
    public fullname: string;

    @ApiProperty({
        description: 'User unique address',
        example: 'user@user.ru',
    })
    @IsEmail({}, { message: AUTH_USER_EMAIL_NOT_VALID })
    public email: string;

    @ApiProperty({
        description: 'User birth date',
        example: '1981-03-12',
    })
    @IsISO8601({}, { message: AUTH_USER_DATE_BIRTH_NOT_VALID })
    public dateBirth: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
    })
    @IsString()
    @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
    public password: string;

    @ApiProperty({
        description: 'User city. Can be only one from the list: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    })
    @IsString()
    public city: string;

}