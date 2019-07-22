//Using request stream to read data by attatching a call back funtion____

const http = require('http');
const fs = require('fs');
const url = require('url')
const queryString = require('querystring');

function compute(req, res) {
    const contentLength = parseInt(req.headers['content-length']);
    let requestBody = '';
    req.on('data', function (mambo) {
        requestBody = requestBody + mambo.toString();

        if (requestBody.length >= contentLength) {
            //then the entire request is parsed now!
            const bodyObj = queryString.parse(requestBody);
            const number1 = parseFloat(bodyObj.number1);
            const number2 = parseFloat(bodyObj.number2);
            const result = number1 + number2;
            res.end(result.toString());
        }
    });

}

function(req, res) {
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


