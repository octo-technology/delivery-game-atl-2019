import { Hero } from '../hero';

export interface HeroServiceInterface {
    getAll(): Promise<Array<Hero>>;
}
