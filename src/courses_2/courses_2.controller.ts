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
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
