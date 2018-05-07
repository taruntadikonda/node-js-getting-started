var express = require('express');
var path = require('path');
var hbs=require('express-handlebars');
var PORT = process.env.PORT || 5000;
var app= express();


var routes = require('./routes/index');
//static files
app.use(express.static(path.join(__dirname, 'public')));
//templating engine

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'error',layoutsDir:__dirname+'/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
