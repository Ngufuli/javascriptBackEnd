const express = require('express');
const url = require('url');
const fs = require('fs');
const morgan = require('morgan');
const BodyParser = require('body-parser');
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
app.use(BodyParser.urlencoded({
    extended: true,
    parameterLimit: 100
}));
app.use(express.static('public'));

app.get('/', function(req, res) {
    const stream = fs.createReadStream(__dirname + 
        '/html/index.html', 'utf8');
    stream.pipe(res);
});
app.get('/add', function(req, res) {
    res.render('sum.pug', {});
});
app.post('/add/compute', computeObj.computeSum);

app.use(notFound);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
