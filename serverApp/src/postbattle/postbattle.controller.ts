import { Controller, Get } from '@nestjs/common';
import { PostbattleService } from './postbattle.service';

@Controller('postbattle')
export class PostbattleController {
  constructor(private readonly postbattleService: PostbattleService) {}

  @Get()
  findAll() {
    return this.postbattleService.findAll();
  }
}
