import { Test, TestingModule } from '@nestjs/testing';
import { RouteDriverService } from './route-driver.service';

describe('RouteDriverService', () => {
  let service: RouteDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteDriverService],
    }).compile();

    service = module.get<RouteDriverService>(RouteDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
