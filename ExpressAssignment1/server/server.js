const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '/html', 'index.html'));
    next();
});

app.get('add/compute', (req, res)=>{
    const first = parseInt(number1);
    const second = parseInt(number2);
    result = number1 + number2;

    res.send(result);
});


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server running on port ${port}...`));