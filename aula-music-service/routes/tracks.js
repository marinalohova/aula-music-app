var TrackController = require('../controller/trackController');
const PAGE_SIZE = 5;

module.exports = app => {

    app.get('/tracks',
        async (req, res) => {
            var options = {
                page: req.query.page || 1,
                page_size: req.query.page_size || PAGE_SIZE
            };
            
            var {paginated, totals} = await TrackController.list(options);
            res.json({paginated, totals});
        });

    app.get('/tracks/:id',

        (req, res) => {

            res.json({});
        });

    app.patch('/tracks/:id',

        (req, res) => {
            res.json({});
        });

    app.delete('/tracks/:id',

        (req, res) => {
            res.json({});
        });
};
