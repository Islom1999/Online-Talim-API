import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('API documentation for your Nest.js application')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors();
  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APPLICATION_PORT); 
}

bootstrap();
