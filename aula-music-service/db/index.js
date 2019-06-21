'use strict';

const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const adapter = new FileAsync('./db/aula.json');

const db = low(adapter);

module.exports = db;