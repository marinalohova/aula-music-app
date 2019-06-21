'use strict';

const routes = [
    require('./tracks.js')
];

module.exports = {
    route: (app) => {
        return routes.map((route) => {
            return route(app);
        });
    }
};
