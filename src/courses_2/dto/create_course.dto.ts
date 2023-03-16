import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true }) //As strings que ela vai avaliar, são as do conteudo do array
  readonly tags: string[];
}
