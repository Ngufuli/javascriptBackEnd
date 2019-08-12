const mongoose = require('mongoose');

function connect(){
    mongoose.connect('', {
        useNewUrlParser: true
    });

    const connection = mongoose.connection;

    connection.on('error', function(err){
        console.log("Error: ", err);
    });

    connection.on('open', function(){
        console.log("Database connected successfully");
    });
}

module.exports = {
    connect: connect
}