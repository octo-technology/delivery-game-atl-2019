import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { Hero } from '../../../domain/hero/hero';
import { HeroServiceInterface } from '../../../domain/hero/interface/hero.service.interface';

@Controller('heroes')
export class HeroesController {
    constructor(@Inject('HeroServiceInterface') private readonly heroService: HeroServiceInterface) {
    }

    @Post('/')
    @HttpCode(HttpStatus.OK)
    async enrollHero(@Body() hero: Hero): Promise<void> {
        await this.heroService.enrollHero(hero);
    }
}
