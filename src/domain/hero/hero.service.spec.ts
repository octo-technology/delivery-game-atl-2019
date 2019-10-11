import { HeroService } from './hero.service';
import { HeroRepositoryInterface } from './interface/hero.repository.interface';
import { Hero } from './hero';

class HeroRequest implements Hero {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

it('creates a hero', async () => {
    const hero = new HeroRequest('Burger Master');
    const heroRepository = {} as HeroRepositoryInterface;
    heroRepository.save = jest.fn().mockResolvedValue(undefined);
    const heroService = new HeroService(heroRepository);

    const enrolledHeroResolution = await heroService.enrollHero(hero);

    expect(heroRepository.save).toHaveBeenCalledWith(hero);
    expect(enrolledHeroResolution).toEqual(undefined);
});
