import { Test, TestingModule } from '@nestjs/testing';
import { PowensController } from './powens.controller';

describe('PowensController', () => {
  let controller: PowensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowensController],
    }).compile();

    controller = module.get<PowensController>(PowensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
