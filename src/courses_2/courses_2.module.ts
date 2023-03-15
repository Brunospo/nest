import { Module } from '@nestjs/common';
import { Courses2Controller } from './courses_2.controller';
import { Courses2Service } from './courses_2.service';

@Module({
  controllers: [Courses2Controller],
  providers: [Courses2Service],
})
export class Courses2Module {}
