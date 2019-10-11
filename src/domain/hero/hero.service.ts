import { Inject, Injectable } from '@nestjs/common';
import { HeroRepositoryInterface } from './interface/hero.repository.interface';
import { HeroServiceInterface } from './interface/hero.service.interface';
import { Hero } from './hero';

@Injectable()
export class HeroService implements HeroServiceInterface {
    constructor(
        @Inject('HeroRepositoryInterface') private readonly heroRepository: HeroRepositoryInterface,
    ) {
    }

    enrollHero(hero: Hero): Promise<void> {
        return this.heroRepository.save(hero);
    }
}
