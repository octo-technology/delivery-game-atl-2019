import { Given, Then, When } from 'cucumber';
import { Hero } from '../domain/hero/hero';
import { expect } from 'chai';
import { RequestMethod, RequestWrapper } from '../test/request-wrapper';
import { HttpStatus } from '@nestjs/common';
import { MongoOperations } from '../test/mongo-operations';
import { HeroRepository } from '../infrastructure/hero/repository/hero.repository';

let hero: Hero;
const request = new RequestWrapper<Hero>(RequestMethod.POST, '/heroes');

Given(/^un héro s'appellant "([^"]*)"$/, (name: string) => {
    hero = { name };
});

Given(/^un héro déjà enrollé nommé "([^"]*)"$/, async (name: string) => {
    const heroToInsert: Hero = { name };

    await new MongoOperations(HeroRepository.COLLECTION_NAME).insert(heroToInsert);
});

When(/^un responsable des héros enrolle ce héro$/, async () => {
    await request.send(hero);
});

Then(/^ce héro est enrollé dans le comité des défenses de la Terre$/,
    async () => {
        expect(request.responseStatus).to.equal(HttpStatus.OK);

        const heroesFromDatabase = await new MongoOperations(HeroRepository.COLLECTION_NAME).getAll();
        expect(hero.name).to.eql(heroesFromDatabase[0].name);
    });

Then(/^l'enrollement d'un héro déjà enrollé est impossible$/, () => {
    expect(request.responseStatus).to.equal(HttpStatus.BAD_REQUEST);
});
