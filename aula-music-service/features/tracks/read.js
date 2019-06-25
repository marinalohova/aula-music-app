'use strict';

const db = require('../../db');

module.exports = {
  findAll,
};

async function findAll(options) {
  const offset = (options.page - 1) * options.page_size;
  const limit = offset + options.page_size;

  const tracks = (await db).get('tracks');
  const paginated = tracks.slice(offset, limit).value();
  const totals = tracks.size().value();

  return {paginated, totals};
}
