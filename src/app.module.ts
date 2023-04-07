import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { Courses2Module } from './courses_2/courses_2.module';

@Module({
  imports: [
    Courses2Module,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dockerpg',
      database: 'cursonest',
      autoloadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
