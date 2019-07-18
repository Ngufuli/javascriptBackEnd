const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');


function onRequest(req, res){
    const urlParts = url.parse(req.url);

    console.log('Request path:', req.url);
    if(urlParts.pathname === '/'){
        const stream = fs.createReadStream(__dirname + '/index1.html', 'utf8');
        stream.pipe(res);
    }
    else if(urlParts.pathname === '/add'){
        const stream = fs.createReadStream(__dirname + '/add.html', 'utf8');
        stream.pipe(res);
    }
    else if(urlParts.pathname === '/add/compute'){
        //get both number 1 and number 2 and the calculate the sum
        const queryParams = queryString.parse(urlParts.query);
        const result = parseFloat(queryParams.number1) + parseFloat(queryParams.number2);
        res.end(result.toString());
    }
    else {
        const stream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        stream.pipe(res);
    }
}

const server = http.createServer(onRequest);
server.listen(1300);