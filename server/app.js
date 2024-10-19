const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const errorMiddleware = require('./middlewares/errorMiddleware');
const config = require('./config/default');

const app = express();

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());

// Use authentication middleware for specific routes
app.use('/api', todoRoutes);

// Centralized Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
