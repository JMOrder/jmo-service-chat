import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";
import { Room } from './room.schema';

@Schema()
export class Message extends Document {
  @Prop()
  message: string;
  @Prop({ type: Types.ObjectId })
  room: Room;
  @Prop()
  createdAt: string;
  @Prop()
  updatedAt: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
