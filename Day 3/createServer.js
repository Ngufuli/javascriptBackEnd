const http = require('http');
const fs = require('fs');

function onResponse(req, res){
    console.log("We got our first request!");

    // const htmlString = fs.readFileSync(__dirname + "/index.html", "utf8");
    
    // fs.readFile(__dirname + "/index.html", "utf8",
    //  function(err, htmlString){
    //      console.log("readFile callback called");
    //      if(err){
    //          res.end("An error occured");
    //      }
    //      else{
    //          res.end(htmlString);
    //      }
    //  });
    const stream = fs.createReadStream(__dirname + "/index.html", "utf8");  

    stream.pipe(res);

    console.log("File reading has completed!")

}
const server = http.createServer(onResponse);
server.listen(7000);