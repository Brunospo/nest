import { Test, TestingModule } from '@nestjs/testing';
import { Courses2Controller } from './courses_2.controller';

describe('Courses2Controller', () => {
  let controller: Courses2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Courses2Controller],
    }).compile();

    controller = module.get<Courses2Controller>(Courses2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
