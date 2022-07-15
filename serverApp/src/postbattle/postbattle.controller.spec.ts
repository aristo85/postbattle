import { Test, TestingModule } from '@nestjs/testing';
import { PostbattleController } from './postbattle.controller';

describe('PostbattleController', () => {
  let controller: PostbattleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostbattleController],
    }).compile();

    controller = module.get<PostbattleController>(PostbattleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
