'use strict';
const fs = require('fs');

function add(num1, num2) {
    return num1 + num2;
}

function compute(req, res) {
    const number1 = parseFloat(req.body.number1);
    const number2 = parseFloat(req.body.number2);
    const result = add(number1, number2);

    req.session.add_result = result;

    res.render('sum.pug', {
        sum: result
    });
}

module.exports = {
    computeSum: compute,
    addNumbers: add
};
