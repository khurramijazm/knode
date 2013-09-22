var http = require("http");
var mysql = require('mysql2');

var connection = mysql.createConnection({user:'root',database:'test',host:'localhost',password:'root'});

// Build the server
var app = http.createServer(function(request, response) {
    connection.query('select * from test',function(err,rows){
       if(err){console.log('error',err);}
       else{
            console.log('Rows fetched',rows);
        }
});
   response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end("Hello world!\n");
});

// Start that server, baby
app.listen(1337, "192.168.1.101");
console.log("Server running at http://localhost:1337/");
