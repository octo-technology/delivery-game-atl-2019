import { RequestMethod, RequestWrapper } from '../test/request-wrapper';
import { Hero } from '../domain/hero/hero';
import { Then, When } from 'cucumber';
import { expect } from 'chai';
import { CucumberDatatable } from './hooks';

const request = new RequestWrapper<Array<Hero>>(RequestMethod.GET, '/heroes');

When(/^un responsable des héros affiche les héros$/, async () => {
    await request.send();
});

Then(/^la liste retournée est:$/, async (datatable: CucumberDatatable) => {
    const heroNames = [];
    const data = datatable.rawTable.slice(1);

    data.forEach((name) => heroNames.push(name[0]));

    // @ts-ignore
    expect(heroNames).to.eql(request.responseBody.map(hero => hero.name));
});
