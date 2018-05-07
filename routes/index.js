var express = require('express');
var app = express.Router();

app.get('/',function(req,res)
{
    res.send("<h1>Tarun Bhavana</h1>");
});


module.exports = app;