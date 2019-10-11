import { HeroRepositoryInterface } from '../../../domain/hero/interface/hero.repository.interface';
import { Hero } from '../../../domain/hero/hero';
import { Inject, Injectable } from '@nestjs/common';
import { MongoProvider } from '../../../config/mongo.provider';
import { CommonRepository } from '../../global/common.repository';

@Injectable()
export class HeroRepository extends CommonRepository implements HeroRepositoryInterface {
    constructor(@Inject('MongoProvider') mongoProvider: MongoProvider) {
        super(mongoProvider, 'heroes');
    }

    async save(hero: Hero): Promise<void> {
        await this.collection.insertOne(hero);
    }
}
