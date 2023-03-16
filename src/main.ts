import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Remove propriedades que foram passadas no body e que não estão no DTO
      whitelist: true,
      //Não permitir que um registro seja criado se ele passadas no body com alguma propriedade que não esteja no DTO
      forbidNonWhitelisted: true,
      //Define automaticamente o tipo dos dados da requisição que chega, como o tipo do DTO
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
