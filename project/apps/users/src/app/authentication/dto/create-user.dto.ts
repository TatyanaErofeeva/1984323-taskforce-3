import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'User Firstname and Lastname',
        example: 'Ivan Ivanov',
    })
    public fullname: string;

    @ApiProperty({
        description: 'User unique address',
        example: 'user@user.ru'
    })
    public email: string;

    @ApiProperty({
        description: 'User birth date',
        example: '1981-03-12',

    })
    public dateBirth: string;

    @ApiProperty({
        description: 'User password',
        example: '123456'
    })
    public password: string;

    @ApiProperty({
        description: 'User city. Can be only one from the list: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    })
    public city: string;

}