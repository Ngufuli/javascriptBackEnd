const express= require('express');
const fs = require('fs');
const url = require('url');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const computeObj = require('./computation/compute')

const app = express();
function notFound(req, res) {
    const stream = fs.createReadStream(__dirname +
        '/html/404.html', 'utf8');
    res.status(404);
    stream.pipe(res);
}


app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 200
}));
app.use(express.static('public'));

app.get('/', function(req, res){
    const stream = fs.createReadStream(__dirname + 'html/index.html', 'utf8');
    stream.pipe(res);
});


    app.get('add/', function(res, req){
        res.render('sum.pug', {});
    });
    app.post('add/compute', computeObj.computeAdd);


    app.get('/sub', function(req, res){
        res.render('sub.pug', {});
    });
    app.post('sub/compute', computeObj.computeSub);


    app.get('mul', function(req, res){
        res.render('mul.pug', {});
    });
    app.post('mul/compute', computeObj.computeMul);


    app.get('/mul', function(req, res){
        res.render('div.pug', computeObj.computeDiv);
    });

    app.use(notFound);



const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}....`);
});