import { IsEmail, IsNotEmpty } from 'class-validator';
import {Subscriber} from '../email-subscriber.constant';

export class CreateSubscriberDto {
    @IsEmail({}, { message: Subscriber.EmailNotValid })
    public email: string;

    @IsNotEmpty({ message: Subscriber.FullNameIsEmpty })
    public fullname: string;

    @IsNotEmpty({ message: Subscriber.UserIdIsEmpty })
    public userId: string;
}