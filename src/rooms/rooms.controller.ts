import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from 'src/schemas/room.schema';
import { RoomCreateDto } from './dto/create.dto';

@Controller('rooms')
export class RoomsController {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>) {}

  @Get()
  findRoom() {
    return this.roomModel.find();
  }

  @Post()
  createRoom(@Body() roomCreateDto: RoomCreateDto) {
    const newRoomModel = new this.roomModel(roomCreateDto);
    return newRoomModel.save();
  }
}
