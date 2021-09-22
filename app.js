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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    //work on database
    res.send('data post successful')
});

app.listen(3000);