import { Controller, Get, Inject } from '@nestjs/common';
import { Hero } from '../../../domain/hero/hero';
import { HeroServiceInterface } from '../../../domain/hero/interface/hero.service.interface';

@Controller('heroes')
export class HeroesController {
    constructor(@Inject('HeroServiceInterface') private readonly heroService: HeroServiceInterface) {
    }

    @Get('/')
    async list(): Promise<Array<Hero>> {
        return this.heroService.getAll();
    }
}
