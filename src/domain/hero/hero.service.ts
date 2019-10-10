import { Inject, Injectable } from '@nestjs/common';
import { HeroRepositoryInterface } from './interface/hero.repository.interface';
import { Hero } from './hero';
import { HeroServiceInterface } from './interface/hero.service.interface';

@Injectable()
export class HeroService implements HeroServiceInterface {
    constructor(
        @Inject('HeroRepositoryInterface') private readonly heroRepository: HeroRepositoryInterface,
    ) {
    }

    getAll(): Promise<Array<Hero>> {
        return this.heroRepository.getAll();
    }
}
