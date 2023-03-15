import { Test, TestingModule } from '@nestjs/testing';
import { Courses2Service } from './courses_2.service';

describe('Courses2Service', () => {
  let service: Courses2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Courses2Service],
    }).compile();

    service = module.get<Courses2Service>(Courses2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
