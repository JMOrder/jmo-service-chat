import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";

@Schema()
export class Room extends Document {
  @Prop()
  room: string;
  @Prop()
  createdBy: number;
  @Prop()
  createdAt: Date;
  @Prop()
  messages: [{
    type: Types.ObjectId,
    ref: "Message"
  }]
  @Prop()
  updatedAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
