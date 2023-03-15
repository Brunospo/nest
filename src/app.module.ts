import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { Courses2Controller } from './courses_2/courses_2.controller';
import { Courses2Service } from './courses_2/courses_2.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, Courses2Controller],
  providers: [AppService, Courses2Service],
})
export class AppModule {}
