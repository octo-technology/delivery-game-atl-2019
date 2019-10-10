import { Controller, Get } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    @Get('/')
    async list() {
        return [];
    }
}
