const express = require('express');
const setRoutes = require('./routes/index');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
setRoutes(app);

// Export as a serverless function handler for Vercel
module.exports = (req, res) => {
  app(req, res);
};