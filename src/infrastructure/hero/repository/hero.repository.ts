import { HeroRepositoryInterface } from '../../../domain/hero/interface/hero.repository.interface';
import { Hero } from '../../../domain/hero/hero';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { MongoProvider } from '../../../config/mongo.provider';
import { Collection } from 'mongodb';

export const MONGO_DUPLICATE_CODE = 11000;
export const HERO_ALREADY_ENROLLED = 'Hero already enrolled';

@Injectable()
export class HeroRepository implements HeroRepositoryInterface, OnModuleInit {
    static COLLECTION_NAME = 'heroes';
    protected mongoProvider: MongoProvider;
    protected collection!: Collection;

    constructor(@Inject('MongoProvider') mongoProvider: MongoProvider) {
        this.mongoProvider = mongoProvider;
    }

    async onModuleInit() {
        const db = await this.mongoProvider.getDatabaseInstance();
        await db.createIndex(HeroRepository.COLLECTION_NAME, { name: 1 }, { unique: true });
        this.collection = await db.collection(HeroRepository.COLLECTION_NAME);
    }

    async save(hero: Hero): Promise<void> {
        await this.collection.insertOne(hero)
            .catch((e) => {
                if (e.code === MONGO_DUPLICATE_CODE) {
                    throw new Error(HERO_ALREADY_ENROLLED);
                }
            });
    }
}
