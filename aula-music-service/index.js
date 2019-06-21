const express = require('express');
const router = require('./routes/index');
const appRouter = express.Router();
const app = express();
require('express-async-errors');
const port = 5000;
const path = require('path');

router.route(appRouter);

app.use('/api', appRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send({error: err.message})
});

app.listen(port, () => console.log(`Aula Music API listening on port ${port}!`));

