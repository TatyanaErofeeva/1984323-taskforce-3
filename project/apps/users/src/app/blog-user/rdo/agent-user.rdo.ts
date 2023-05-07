import { Expose} from 'class-transformer';
import { UserRole, City } from '@project/shared/app-types';
import { ApiProperty } from '@nestjs/swagger';

export class AgentUserRdo {
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
        description: 'User role',
        example: 'Исполнитель'
    })
    @Expose()
    role: UserRole;

    @ApiProperty({
        description: 'rating',
        example: 3
    })
    @Expose()
    rating: number;

    @ApiProperty({
        description: 'quantityCompletedTask',
        example: 3
    })
    @Expose()
    quantityCompletedTask: number;

    @ApiProperty({
        description: 'quantityFailedTask',
        example: 3
    })
    @Expose()
    quantityFailedTask: number;

    @ApiProperty({
        description: 'User unique email address',
        example: 'user@user.ru',
    })
    @Expose()
    email: string;

    @ApiProperty({
        description: 'selfInfo',
        example: 'info about user'
    })
    @Expose()
    selfInfo: string;

    @ApiProperty({
        description: 'specialization',
        example: 'работник'
    })
    @Expose()
    specialization: string;

    @ApiProperty({
        description: 'placeInRating',
        example: 3
    })
    @Expose()
    placeInRating: number;
}