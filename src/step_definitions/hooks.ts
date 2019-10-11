import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { After, AfterAll, BeforeAll } from 'cucumber';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DATABASE_NAME } from '../config/mongo.provider';

export let app: INestApplication;

BeforeAll(async () => {
    const testingModule: TestingModule = await Test
        .createTestingModule({
            imports: [AppModule],
        })
        .compile();
    app = await testingModule.createNestApplication(new FastifyAdapter());
    await app.init();
});

After(async () => {
    const collections = await app.get('MongoProvider').mongoClient.db(DATABASE_NAME).collections();
    for (const collection of collections) {
        await collection.deleteMany();
    }
});

AfterAll(async () => {
    await app.get('MongoProvider').mongoClient.close();
});
