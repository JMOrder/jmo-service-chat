import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { ChatModule } from './chat/chat.module';

const { DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD } = process.env;
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`, {
      useNewUrlParser: true,
      user: DATABASE_USER,
      pass: DATABASE_PASSWORD,
      authSource: "admin"
    }),
    SharedModule,
    RoomsModule,
    ChatModule
  ]
})
export class AppModule {}
