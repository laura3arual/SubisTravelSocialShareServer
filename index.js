'use strict';

let app = require('express')(),
    http = require('http').Server(app);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

// index page 
app.get('/', function (req, res) {
    let model = {
        imageUrl : decodeURIComponent(req.query.url),
        link: decodeURIComponent(req.query.link),
        title : req.query.title,
        description: req.query.desc
    };
   console.log(model);
    res.render('index', {model});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});