const express = require('express');
const path = require('path');
const app = express();

// app.use(path, callback) is used for middleware
// path.join(string*) accepts strings to construct a path

app.use('/public', express.static(path.join(__dirname, 'static')));
// __dirname is a global value with the path of the directory as a string

app.use(express.urlencoded({extended: false}));
// parses the data from the post and attaches it to req.bod
// extended is set to false since the data from the post is not complex

app.set('view engine', 'ejs');

const home = require('./routes/home');

app.use('/', home)

app.listen(3000);