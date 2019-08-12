const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const DB = require('./lib/database');

const app = express();
app.use(morgan('tiny'));
DB.connect();
const port = process.env.PORT || 7770;
app.listen(port, ()=>{
    console.log(`The server has started at port ${port}...`);
});