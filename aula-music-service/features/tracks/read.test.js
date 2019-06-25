'use strict';
/* eslint-disable no-unused-expressions */
const {findAll} = require('./read');
const {expect} = require('chai');

describe('tracks read features', () => {
  it('lists tracks with pagination', async () => {
    const options = {
      page: 2,
      page_size: 1,
    };

    const {paginated: tracks, totals} = await findAll(options);

    expect(totals).to.equal(2);
    expect(tracks).to.have.lengthOf(1);
    expect(tracks[0]).to.deep.include({name: 'Chandelier'});
  });
});
