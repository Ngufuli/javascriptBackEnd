'use strict';

const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb+srv://dbuser:<password>@nodejs-tutorial-n6gbk.mongodb.net/tutorial?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    const connection = mongoose.connection;
    connection.on('error', function(err) {
        console.log('DB error occured', err);
        throw err;
    });
    connection.on('open', function() {
        console.log('DB connection successful!');
    });
}

module.exports = {
    connect: connect
};
