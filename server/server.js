"use strict";

const express = require('express');

// Set port for heroku || local
const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Ben',
            age: 43
        },
        {
            name: 'Luke',
            age: 20
        },
        {
            name: 'Nuno',
            age: 37
        }
    ]);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports.app = app;