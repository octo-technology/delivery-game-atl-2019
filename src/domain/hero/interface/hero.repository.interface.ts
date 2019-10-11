import { Hero } from '../hero';

export interface HeroRepositoryInterface {
    save(hero: Hero): Promise<void>;
}
