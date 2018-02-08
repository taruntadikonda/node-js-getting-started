var express = require('express');
var path = require('path');
var hbs=require('express-handlebars');
var PORT = process.env.PORT || 5000;
var app= express();

//static files
app.use(express.static(path.join(__dirname, 'public')));
//templating engine

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'home',layoutsDir:__dirname+'/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
