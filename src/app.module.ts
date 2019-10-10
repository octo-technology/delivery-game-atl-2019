import { Module } from '@nestjs/common';
import { HeroesController } from './infrastructure/heroes.controller';

@Module({
    controllers: [HeroesController],
})
export class AppModule {
}
