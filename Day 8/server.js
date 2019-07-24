const express = require('express');
const url = require('url');
const fs = require('fs');
const morgan = require('morgan');
const BodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const computeObj = require('./controllers/compute');

function notFound(req, res) {
    const stream = fs.createReadStream(__dirname + 
        '/html/404.html', 'utf8');
    res.status(404);
    stream.pipe(res);
}

const app = express();
app.set('view engine', 'pug');
app.use(morgan('tiny'));

app.use(cookieParser('keyboard cat'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'keyboard cat'
}));

app.use(BodyParser.urlencoded({
    extended: true,
    parameterLimit: 100
}));
app.use(express.static('public'));

app.get('/', function(req, res) {
    if(req.session.isLoggedIn) {
        res.render('home.pug', {
            name: 'Shashi'
        });
    }
    else {
        res.render('login.pug', {});
    }
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(username === 'shashi' && password === 'nothing') {
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
    else {
        req.session.isLoggedIn = false;

        res.render('login.pug', {
            error: true
        });
    }
});

app.get('/add', function(req, res) {
    console.log('result:', req.session.add_result);
    const oldResult = req.cookies.add_result;
    res.render('sum.pug', {
        sum: oldResult
    });
});
app.post('/add/compute', computeObj.computeSum);

app.use(notFound);
app.listen(8000);
