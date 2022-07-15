import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostbattleController } from './postbattle/postbattle.controller';
import { PostbattleService } from './postbattle/postbattle.service';

@Module({
  imports: [],
  controllers: [AppController, PostbattleController],
  providers: [AppService, PostbattleService],
})
export class AppModule {}
