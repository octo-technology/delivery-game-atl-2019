import { OnModuleInit } from '@nestjs/common';
import { Collection } from 'mongodb';
import { MongoProvider } from '../../config/mongo.provider';

export abstract class CommonRepository implements OnModuleInit {
    protected mongoProvider: MongoProvider;
    protected collection!: Collection;
    private readonly collectionName: string;

    protected constructor(mongoProvider: MongoProvider, collectionName: string) {
        this.mongoProvider = mongoProvider;
        this.collectionName = collectionName;
    }

    async onModuleInit() {
        const db = await this.mongoProvider.getDatabaseInstance();
        this.collection = await db.collection(this.collectionName);
    }
}
