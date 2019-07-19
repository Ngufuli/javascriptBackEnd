'use strict';
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

module.exports = compute;