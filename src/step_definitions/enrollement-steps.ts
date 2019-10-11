import { Given, Then, When } from 'cucumber';
import { Hero } from '../domain/hero/hero';
import { expect } from 'chai';
import { RequestMethod, RequestWrapper } from '../test/request-wrapper';
import { HttpStatus } from '@nestjs/common';

let hero: Hero;
const request = new RequestWrapper<Hero>(RequestMethod.POST, '/heroes');

Given(/^un héro s'appellant "([^"]*)"$/, (name: string) => {
    hero = { name };
});

When(/^un responsable des héros enrolle ce héro$/, async () => {
    await request.send(hero);
});

Then(/^ce héro est enrollé dans le comité des défenses de la Terre$/,
    () => {
        expect(request.responseStatus).to.equal(HttpStatus.OK);
    });
