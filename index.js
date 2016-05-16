'use strict';

let app = require('express')(),
    http = require('http').Server(app);

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    res.render('index');
});

let port = process.env.PORT | 3000

app.listen(port, () => {
    console.log('started :3000');
})