'use strict';

const config = require('./../config');

const env = getEnv(process.env.NODE_ENV);

function getEnv(environment) {
  switch (environment) {
    case 'development':
      return setEnv(config.development);
      break;
    case 'test':
      return setEnv(config.test);
      break;
    case 'production':
      return setEnv(config.production);
      break;
    default:
      return setEnv(config.development);
      break;
  }
}

function setEnv(config) {
  return {
    ASSETS_DIR: config.assets.dir || 'assets',
    SERVICE_HOST: config.service.host || 'http://localhost',
    SERVICE_PORT: config.service.port || 3000,
    SERVICE_PREFIX: config.service.prefix || null,
    DATABASE_URL: config.database.url || 'http://localhost:5432',
  };
}

module.exports = env;
