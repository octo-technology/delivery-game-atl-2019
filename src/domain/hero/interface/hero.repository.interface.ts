import { Hero } from '../hero';

export interface HeroRepositoryInterface {
    save(hero: Hero): Promise<void>;

    getAll(): Promise<Array<Hero>>;
}
