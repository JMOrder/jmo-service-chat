import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";

@Schema()
export class Message extends Document {
  @Prop()
  message: string;
  @Prop()
  room: {
    type: Types.ObjectId,
    ref: "Room"
  }
  @Prop()
  createdAt: string;
  @Prop()
  updatedAt: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
