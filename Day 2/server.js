//A simple nodeJS server

const http = require('http');

function onRequest(req, res){
    console.log("We got our first request");
    res.end("Hellow world!");
}

const server = http.createServer(onRequest);
server.listen(8000);