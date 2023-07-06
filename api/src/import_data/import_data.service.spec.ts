import { Test, TestingModule } from '@nestjs/testing';
import { ImportDataService } from './import_data.service';

describe('ImportDataService', () => {
  let service: ImportDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportDataService],
    }).compile();

    service = module.get<ImportDataService>(ImportDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
