const db = require('../db');

module.exports = {
    list
};

async function list(options) {
    var offset = (options.page - 1) * options.page_size;
    var limit = offset + options.page_size;

    var results = (await db).get('tracks');
    var paginated = results.slice(offset, limit).value();
    var totals = results.size();

    return { paginated, totals }
}
