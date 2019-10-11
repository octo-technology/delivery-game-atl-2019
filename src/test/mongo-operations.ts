import { app } from '../step_definitions/hooks';
import { Hero } from '../domain/hero/hero';

export class MongoOperations {
    private collectionName: string;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    async insert(document: Hero): Promise<void> {
        await app.get('MongoProvider').mongoClient
            .db()
            .collection(this.collectionName)
            .insertOne(document);
    }

    async getAll(): Promise<Array<any>> {
        return app.get('MongoProvider').mongoClient
            .db()
            .collection(this.collectionName)
            .find({})
            .toArray();
    }
}
