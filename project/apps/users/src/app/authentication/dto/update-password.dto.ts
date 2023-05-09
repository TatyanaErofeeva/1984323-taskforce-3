import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
import { ValidateCondition } from '../authentication.constant';

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
    @Length(ValidateCondition.MinPasswordLength,ValidateCondition.MaxPasswordLength)
    public currentPassword: string;

    @ApiProperty({
        description: 'User new password',
        example: ':sladksod'
    })
    @Length(ValidateCondition.MinPasswordLength, ValidateCondition.MaxPasswordLength)
    public newPassword: string;
}