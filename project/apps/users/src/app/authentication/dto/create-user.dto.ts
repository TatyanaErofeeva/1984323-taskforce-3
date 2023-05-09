import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISO8601, IsString, Length } from 'class-validator';
import {AuthUser, ValidateCondition } from '../authentication.constant';
import { Response, UserRole } from '@project/shared/app-types';

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
    @IsEmail({}, { message: AuthUser.EmailNotValid })
    public email: string;

    @ApiProperty({
        description: 'User birth date',
        example: '1981-03-12',
    })
    @IsISO8601({}, { message: AuthUser.DateBirthNotValid })
    public dateBirth: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
    })
    @IsString()
    @Length(ValidateCondition.MinPasswordLength, ValidateCondition.MaxPasswordLength)
    public password: string;

    @ApiProperty({
        description: 'User city. Can be only one from the list: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    })
    @IsString()
    public city: string;

    @ApiProperty({
        description: 'User role',
        example: 'customer'
    })
    @IsString()
    public role: UserRole;

    @ApiProperty({
        description: 'registrationDate role',
        example: '2022-03-03'
    })
    public registrationDate: Date;

    @ApiProperty({
        description: 'quantityPublishedTask',
        example: 3
    })
    public quantityPublishedTask?: number;

    @ApiProperty({
        description: 'quantityNewTask',
        example: 3
    })
    public quantityNewTask?: number;

    @ApiProperty({
        description: 'quantityFailedTask',
        example: 3
    })
    public quantityFailedTask?: number;

    @ApiProperty({
        description: 'selfInfo',
        example: 'info about user'
    })
    public selfInfo?: string;

    @ApiProperty({
        description: 'rating',
        example: 3
    })
    public rating?: number;

    @ApiProperty({
        description: 'specialization',
        example: 'работник'
    })
     specialization?: string;

    @ApiProperty({
        description: 'placeInRating',
        example: 3
    })
    public placeInRating?: number;

    @ApiProperty({
        description: 'User responses',
        example: 'something'
    })
    public _responses: Response;
}