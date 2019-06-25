'use strict';

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const env = require('./../env');

const adapter = new FileAsync(env.DATABASE_URL);

const db = low(adapter);

module.exports = db;
