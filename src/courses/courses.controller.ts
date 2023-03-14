import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  // Assim captura uma lista de parametros
  @Get('g1/:id')
  findOne1(@Param() params) {
    return `Curso ${params.id}`;
  }

  // Assim captura um parametro especifico
  @Get('g2/:id')
  findOne2(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  // Forma básica de trabalhar com recebimento de informações
  @Post()
  create(@Body() body) {
    return body;
  }

  // Capturando uma informação especifica
  @Post('/p')
  create2(@Body('title') a) {
    return a;
  }

  // Retornando um statusCode diferente
  @Post('/p2')
  @HttpCode(HttpStatus.NO_CONTENT) //ou @HttpCode(204)
  create3(@Body('title') a) {
    return a;
  }

  // Quando temos que retornar um statusCode após um tratamento de erros (por exemplo)
  @Get('/teste')
  teste(@Res() response) {
    return response.status(200).send('teste');
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualizaçao do Curso ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Apagando o curso ${id}`;
  }
}
