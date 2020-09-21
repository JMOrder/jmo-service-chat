import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';

const { DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD } = process.env;
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?authSource=admin&w=1`, {
      useNewUrlParser: true
    }),
    SharedModule
  ]
})
export class AppModule {}
