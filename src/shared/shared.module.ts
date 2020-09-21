import { Module } from '@nestjs/common';
import { AppLoggerModule } from './app-logger/app-logger.module';
import { EurekaService } from './eureka/eureka.service';

@Module({
  imports: [
    AppLoggerModule
  ],
  providers: [
    EurekaService
  ]
})
export class SharedModule { }
