import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";
import { Message } from './message.schema';

@Schema()
export class Room extends Document {
  @Prop()
  createdBy: number;
  @Prop()
  createdAt: Date;
  @Prop([Message])
  messages: Message[]
  @Prop()
  updatedAt: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
