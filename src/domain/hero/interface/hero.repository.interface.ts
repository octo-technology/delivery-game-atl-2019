import { Hero } from '../hero';

export interface HeroRepositoryInterface {
    getAll(): Promise<Array<Hero>>;
}
