import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  // Assim captura uma lista de parametros
  @Get(':id')
  findOne1(@Param() params) {
    return `Curso ${params.id}`;
  }

  // Assim captura um parametro especifico
  @Get(':id')
  findOne2(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  // Forma básica de trabalhar com recebimento de informações
  @Post()
  create(@Body() body) {
    return body;
  }

  // Capturando uma informação especifica
  @Post('/c')
  create2(@Body('title') a) {
    return a;
  }
}
