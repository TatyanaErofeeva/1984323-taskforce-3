import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
    @ApiProperty({
        description: 'The uniq user ID',
        example: '13'
    })
    @Expose({ name: '_id' })
    @Transform(({ obj }) => obj._id.toString())
    public id: string;

    @ApiProperty({
        description: 'User avatar path',
        example: '/images/user.png'
    })
    @Expose()
    public avatar: string;

    @ApiProperty({
        description: 'User date birth (ISO format)',
        example: '1981-03-12'
    })
    @Expose()
    public dateBirth: string;

    @ApiProperty({
        description: 'User email',
        example: 'user@user.local'
    })
    @Expose()
    public email: string;

    @ApiProperty({
        description: 'User Fullname',
        example: 'Ivan Ivanov'
    })
    @Expose()
    public fullname: string;

    
    @ApiProperty({
        description: 'User city. Can be only one from the list: Москва, Санкт-Петербург, Владивосток',
        example: 'Москва'
    }) @Expose()
    public city: string;
}