if (process.env.NODE !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, '/views'));
app.use(express.static('public'));

// Routes
const homeRouter = require('./routes/home');

app.use('/', homeRouter);

app.listen(process.env.PORT, console.log("Server started..."));