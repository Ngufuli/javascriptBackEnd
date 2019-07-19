//Using request stream to read data by attatching a call back funtion____

const http = require('http');
const fs = require('fs');
const url = require('url')

const compute = require('./compute');



function onRequest(req, res) {
    console.log('Request path:', req.url);
    const urlParts = url.parse(req.url);

    if (urlParts.pathname === '/') {
        const stream = fs.createReadStream(__dirname + '/add.html', 'utf8');
        stream.pipe(res);
    }
    else if (urlParts.pathname === '/add') {
        const stream = fs.createReadStream(__dirname + '/add.html', 'utf8');
        stream.pipe(res);
    }
    else if (urlParts.pathname === '/add/compute') {
        compute(req, res);
    }
    else {
        const stream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        stream.pipe(res);
    }
}


const server = http.createServer(onRequest);
server.listen(1310);