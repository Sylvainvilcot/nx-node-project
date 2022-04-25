import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    id: string;

    @Prop({required: true, unique: true})
    login: string;

    @Prop({required: true})
    password: string;

    @Prop()
    role: 'user' | 'admin';

}

export const UserSchema = SchemaFactory.createForClass(User);