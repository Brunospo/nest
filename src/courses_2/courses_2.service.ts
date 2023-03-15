import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class Courses2Service {
  private courses: Course[] = [
    {
      id: 1,
      description: 'Fundamentod do FrameWork NestJs',
      name: 'Fundamentod do FrameWork NestJs',
      tags: ['NodeJs', 'NestJs', 'JavaScript', 'TypeScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(`Course ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
