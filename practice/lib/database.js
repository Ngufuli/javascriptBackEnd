'use strict';

const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb+srv://db_user_0:12345@cluster0-ql51d.mongodb.net/eg?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });
    const connection = mongoose.connection;
    connection.on('error',function(err){
        console.log('DB connection failed', err);
    });
    connection.on('open', function(){
        console.log('DB connection successful!');
    })
}

module.exports = {
    connect
};