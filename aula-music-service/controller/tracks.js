const {findAll} = require('../features/tracks/read');

module.exports = {
  list,
};

async function list(options) {
  return findAll(options);
}
