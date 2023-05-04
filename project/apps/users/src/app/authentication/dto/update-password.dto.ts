import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../authentication.constant';

export default class UpdateUserPasswordDto {
    @ApiProperty({
        description: 'User uniq email',
        example: 'user@user.local'
    })
    public email: string;

    @ApiProperty({
        description: 'User current password',
        example: '123456'
    })
    @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
    public currentPassword: string;

    @ApiProperty({
        description: 'User new password',
        example: ':sladksod'
    })
    @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH)
    public newPassword: string;
}