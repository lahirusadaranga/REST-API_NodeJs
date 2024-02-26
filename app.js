const express = require('express');
const app = express();

const PostRoutes = require('./api/Routes/route');

app.use('/route',PostRoutes);

module.exports = app;