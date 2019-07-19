//using express to develop web server :)

const express = require('express');
const url = require('url');

function first(req, res, next){
    res.end('This is the first one');
    next();
}

function hello(req, res, next){
    res.end('This is the second');
    next();
}
function third(req, res){
    res.end('This is the last one');
}

const app = express();
app.use(first);
app.use(hello);
app.use(third);
app.listen(1550);
