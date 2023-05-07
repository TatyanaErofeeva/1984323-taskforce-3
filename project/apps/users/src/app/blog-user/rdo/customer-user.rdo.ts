import { ApiProperty } from '@nestjs/swagger';
import { City, UserRole } from '@project/shared/app-types';
import { Expose } from 'class-transformer';

export class CustomerUserRdo {
    @ApiProperty({
        description: 'User Fullname',
        example: 'Ivan Ivanov',
    })
    @Expose()
    fullname: string;

    @ApiProperty({
        description: 'The uniq user ID',
        example: '13'
    })
    @Expose({ name: '_id' })
    id: string;

    @ApiProperty({
        description: 'registrationDate',
        example: '2022-03-03'
    })
    @Expose()
    registrationDate: Date;

    @ApiProperty({
        description: 'User city. Can be only one from the list: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    })
    @Expose()
    city: City;

    @ApiProperty({
        description: 'User unique email address',
        example: 'user@user.ru',
    })
    @Expose()
    email: string;

    @ApiProperty({
        description: 'quantityPublishedTask',
        example: 3
    })
    @Expose()
    quantityPublishedTask: number;

    @ApiProperty({
        description: 'quantityNewTask',
        example: 3
    })
    @Expose()
    quantityNewTask: number;

    @ApiProperty({
        description: 'selfInfo',
        example: 'info about user'
    })
    @Expose()
    selfInfo: string;

    @ApiProperty({
        description: 'User role',
        example: 'customer'
    })
    @Expose()
    role: UserRole;
}