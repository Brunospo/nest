import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { Courses2Module } from './courses_2/courses_2.module';

@Module({
  imports: [Courses2Module],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
