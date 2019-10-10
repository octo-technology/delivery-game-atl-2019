import { Injectable } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { isUndefined } from 'lodash';

@Injectable()
export class MongoProvider {

    mongoClient!: MongoClient;
    private _databaseInstance!: Db;

    async initDatabase(): Promise<Db> {
        if (isUndefined(this.mongoClient)) {
            this.mongoClient = await MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');
        }
        this._databaseInstance = await this.mongoClient.db();
        return this._databaseInstance;
    }

    async getDatabaseInstance(): Promise<Db> {
        if (isUndefined(this._databaseInstance)) {
            await this.initDatabase();
        }
        return this._databaseInstance;
    }
}
