import { Module } from '@nestjs/common';
import { HeroesController } from './infrastructure/hero/api/heroes.controller';
import { MongoProvider } from './config/mongo.provider';
import { HeroRepository } from './infrastructure/hero/repository/hero.repository';
import { HeroService } from './domain/hero/hero.service';

@Module({
    providers: [
        MongoProvider,
        { provide: 'HeroServiceInterface', useClass: HeroService },
        { provide: 'HeroRepositoryInterface', useClass: HeroRepository },
    ],
    controllers: [HeroesController],
})
export class AppModule {
}
