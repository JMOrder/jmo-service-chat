import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppLogger } from './shared/app-logger/app-logger.service';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(AppLogger));
  app.enableShutdownHooks();
  const options = new DocumentBuilder()
    .setTitle('JMOrder Chat API')
    .setDescription('The JMOrder API description')
    .setVersion('1.0')
    .addTag('JMOrder')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}

bootstrap();
