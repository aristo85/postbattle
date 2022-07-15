import { Injectable } from '@nestjs/common';
import { dataBase, Teams } from './entities/teams.entity';

@Injectable()
export class PostbattleService {
  private teams: Teams = {
    winners: dataBase.team1,
    losers: dataBase.team2,
  };

  findAll() {
    return this.teams;
  }
}
