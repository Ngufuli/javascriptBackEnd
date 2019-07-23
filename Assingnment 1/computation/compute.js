'use strict';
const fs = require('fs');

//My engines
function add(num1, num2){
    return num1 + num2;
}
function minus(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function divi(num1, num2){
    return num1 / num2;
}


//My engines' uses
function adder(req, res){
    const first = parseFloat(req.body.number1);
    const second = parseFloat(req.body.number2);
    const result = add(first, second);

    res.render('sum.pug', {
        sum: result
    });
}

function substructor(req, res){
    const first = parseFloat(req.body.number1);
    const second = parseFloat(req.body.number2);
    const result = minus(first, second);

    res.render('sub.pug', {
        sub: result
    });
}

function multiplier(req, res){
    const first = parseFloat(req.body.number1);
    const second = parseFloat(req.body.number2);
    const result = multi(first, second);

    res.render('mul.pug', {
        mul: result
    });
}

function divider(req, res){
    const first = parseFloat(req.body.number1);
    const second = parseFloat(req.body.number2);
    const result = divi(first, second);

    res.render('divi.pug', {
        divi: result
    });
}

module.exports = {
    computeAdd: adder,
    computeSub: substructor,
    computeDiv: divider,
    computeMul: multiplier
}