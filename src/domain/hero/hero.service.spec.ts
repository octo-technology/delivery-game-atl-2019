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

it('list heroes', async () => {
    const heroRepository = {} as HeroRepositoryInterface;
    heroRepository.getAll = jest.fn().mockResolvedValue([{ name: 'Burger Master' } as Hero]);
    const heroService = new HeroService(heroRepository);

    const heroes = await heroService.listHeroes();

    expect(heroRepository.getAll).toHaveBeenCalled();
    expect(heroes).toEqual([{ name: 'Burger Master' } as Hero]);
});
