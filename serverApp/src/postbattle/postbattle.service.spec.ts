import { Test, TestingModule } from '@nestjs/testing';
import { PostbattleService } from './postbattle.service';

describe('PostbattleService', () => {
  let service: PostbattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostbattleService],
    }).compile();

    service = module.get<PostbattleService>(PostbattleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
