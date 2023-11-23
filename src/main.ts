import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaService } from './prisma/prisma.service';
import { PrismaErrorFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('API documentation for your Nest.js application')
  .setVersion('1.0')
  .build();
  
  app.enableCors();
  app.setGlobalPrefix('api')

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.useGlobalFilters(new PrismaErrorFilter());

  await app.listen(process.env.APPLICATION_PORT); 
}

bootstrap();
