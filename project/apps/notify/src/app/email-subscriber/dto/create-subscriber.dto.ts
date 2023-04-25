import { IsEmail, IsNotEmpty } from 'class-validator';
import { EMAIL_NOT_VALID, FULL_NAME_IS_EMPTY, USER_ID_IS_EMPTY } from '../email-subscriber.constant';

export class CreateSubscriberDto {
    @IsEmail({}, { message: EMAIL_NOT_VALID })
    public email: string;

    @IsNotEmpty({ message: FULL_NAME_IS_EMPTY })
    public fullname: string;

    @IsNotEmpty({ message: USER_ID_IS_EMPTY })
    public userId: string;
}