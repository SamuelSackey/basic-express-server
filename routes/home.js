const express = require('express');
const route = express.Router();

//To create a middleware for these routes
route.use((req, res, next) => {
    console.log('Using Middleware');
    next();
});

route.get('/', (req, res) => {
    res.render('index');
});

route.get('/search/:searchTerm', (req, res) => {
    res.render('search', {data : {searchTerm : req.params.searchTerm,
    searchResults: ['result1', 'result2']}})
});

route.post('/', (req, res) => {
    console.log(req.body);
    //work on database
    res.send('data post successful')
});

module.exports = route