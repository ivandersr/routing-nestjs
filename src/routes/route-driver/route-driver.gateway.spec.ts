import { Test, TestingModule } from '@nestjs/testing';
import { RouteDriverGateway } from './route-driver.gateway';

describe('RouteDriverGateway', () => {
  let gateway: RouteDriverGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteDriverGateway],
    }).compile();

    gateway = module.get<RouteDriverGateway>(RouteDriverGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
