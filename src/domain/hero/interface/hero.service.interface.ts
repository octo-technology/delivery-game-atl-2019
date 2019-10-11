import { Hero } from '../hero';

export interface HeroServiceInterface {
    enrollHero(hero: Hero): Promise<void>;
}
