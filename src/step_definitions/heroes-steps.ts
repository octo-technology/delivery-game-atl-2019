import { Then, When } from 'cucumber';
import { RequestMethod, RequestWrapper } from '../test/request-wrapper';
import { Hero } from '../domain/hero/hero';
import { expect } from 'chai';

let heroesRequest: RequestWrapper<Hero>;

When(/^the user goes on heroes page$/, async () => {
    heroesRequest = new RequestWrapper<Hero>(RequestMethod.GET, '/heroes');
    await heroesRequest.send();
});

Then(/^there is no heroes$/, () => {
    expect(heroesRequest.responseBody).to.eql([]);
});
