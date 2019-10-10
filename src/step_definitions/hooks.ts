import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { AfterAll, BeforeAll } from 'cucumber';
import { FastifyAdapter } from '@nestjs/platform-fastify';

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

AfterAll(async () => {
    await app.get('MongoProvider').mongoClient.close();
});
