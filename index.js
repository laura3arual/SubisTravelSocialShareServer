'use strict';

let app = require('express')(),
    http = require('http').Server(app);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});