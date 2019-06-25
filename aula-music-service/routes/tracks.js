const {list, download} = require('../controller/tracks');
const PAGE_SIZE = 5;

const express = require('express');
const router = express.Router();

router.get('/',
    async (req, res) => {
      const options = {
        page: req.query.page || 1,
        page_size: req.query.page_size || PAGE_SIZE,
      };

      const {paginated, totals} = await list(options);

      res.json({paginated, totals});
    });

router.get('/:id/download',

    async (req, res) => {
      res.json({});
    });

module.exports = router;
