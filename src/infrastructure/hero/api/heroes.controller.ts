import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { Hero } from '../../../domain/hero/hero';
import { HeroServiceInterface } from '../../../domain/hero/interface/hero.service.interface';
import { HERO_ALREADY_ENROLLED } from '../repository/hero.repository';

@Controller('heroes')
export class HeroesController {
    constructor(@Inject('HeroServiceInterface') private readonly heroService: HeroServiceInterface) {
    }

    @Post('/')
    @HttpCode(HttpStatus.OK)
    async enrollHero(@Body() hero: Hero): Promise<void> {
        await this.heroService.enrollHero(hero)
            .catch((e) => {
                if (e.message === HERO_ALREADY_ENROLLED) {
                    throw new HttpException(HERO_ALREADY_ENROLLED, HttpStatus.BAD_REQUEST);
                }
            });
    }
}
