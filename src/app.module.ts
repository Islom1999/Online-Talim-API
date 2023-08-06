import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { PartsModule } from './modules/parts/parts.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'uploads')
    }),
    AuthModule, 
    PrismaModule, 
    LessonsModule, 
    PartsModule, 
    CoursesModule, 
    CategoriesModule, ProfileModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
}) 
export class AppModule {}
