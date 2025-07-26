const express = require('express');

function setRoutes(app) {
    app.get('/', (req, res) => {
        res.send('Welcome to the Express Server!');
    });

    app.get('/api', (req, res) => {
        res.json({ message: 'This is the API endpoint.' });
    });

    // Add more routes as needed
}

module.exports = setRoutes;