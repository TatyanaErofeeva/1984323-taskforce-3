import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserRole, Response } from '@project/shared/app-types';

@Schema({
    collection: 'users',
    timestamps: true,
})
export class BlogUserModel extends Document implements User {
    @Prop()
    public avatar: string;

    @Prop({
        required: true,
    })
    public dateBirth: Date;

    @Prop({
        required: true,
        unique: true,
    })
    public email: string;

    @Prop({
        required: true,
    })
    public fullname: string;

    @Prop({
        required: true,
    })
    public city: string;

    @Prop({
        required: true,
    })
    public passwordHash: string;

    @Prop({
        required: true,
        type: String,
        enum: UserRole,
        default: UserRole.Agent,
    })
    public role: UserRole;

    @Prop()
    public registrationDate: Date;

    @Prop()
    public quantityPublishedTask: number;

    @Prop()
    public quantityNewTask: number;
    
    @Prop()
    public quantityFailedTask: number;

    @Prop()
    public selfInfo: string;

    @Prop()
    public rating: number;

    @Prop()
    public specialization: string;

    @Prop()
    public placeInRating: number;

    @Prop()
    public _responses?: Response[];
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);