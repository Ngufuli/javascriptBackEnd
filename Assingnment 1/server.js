const express= require('express');
const fs = require('fs');
const url = require('url');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const computeObj = require('./computation/compute')

const app = express();

app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 200
}));
app.use(expess.static('public'));

app.get('/', function(req, res){
    const stream = fs.createReadStream(__dirname + 'html/index.html', 'utf8');
    stream.pipe(res);
});

if(req.url === '/add'){
    app.get('add/', function(res, req){
        res.render('sum.pug', {});
    });
    app.post('add/compute', computeObj.computeAdd);
}
else if(req.url === '/sub'){
    app.get('/sub', function(req, res){
        res.render('sub.pug', {});
    });
    app.post('sub/compute', computeObj.computeSub);
}
else if(req.url === '/mul'){
    app.get('mul', function(req, res){
        res.render('mul.pug', {});
    });
    app.post('mul/compute', computeObj.computeMul);
}
else if(req.url === '/div'){
    app.get('/mul', function(req, res){
        res.render('div.pug', computeObj.computeDiv);
    });
}
else{
    app.post(res.send(404));
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}....`);
});