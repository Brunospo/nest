import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Courses2Service } from './courses_2.service';
import { CreateCourseDto } from './dto/create_course.dto';
import { UpdateCourseDto } from './dto/update_course.dto';

@Controller('courses-2')
export class Courses2Controller {
  constructor(private readonly coursesService: Courses2Service) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
