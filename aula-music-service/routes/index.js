'use strict';

const express = require('express');
const router = express.Router();


router.use('/tracks', require('./tracks'));

module.exports = router;
