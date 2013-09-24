var http = require("http");
var mysql = require('mysql2');
var util = require('util');

var connection = mysql.createConnection({user:'root',database:'test',host:'localhost',password:'root'});

// Build the server
var app = http.createServer(function(request, response) {
    connection.query('select * from test',function(err,rows){
       if(err){
		console.log('error',err);
	   }
       else{
        console.log('Rows fetched');
        response.writeHead(200, {
         "Content-Type": "text/html"
         });
		 response.write("<h2>Welcome to node.js server</h2>");
		 //response.write("Connecting to mysql server ");
		 //for(var i in rows)
		 //{
			//response.write(rows[i].id + " " + rows[i].name + "<br/>" );
		// }
		 response.write("<br><b>browser info : </b>"+request.headers['user-agent']+"<br><b>accept : </b>"+request.headers['accept']+"<br> <b>Your IP: </b>"+ request.connection.remoteAddress);
		console.log('request came from ip'+ request.connection.remoteAddress);
		console.log('user-agent of request'+request.headers['user-agent']);
       response.end("<pre>"+util.inspect(request)+"</pre>");
       }
    });
});
   


// Start that server, baby
app.listen(1337, "192.168.2.249");
console.log("Server running at http://192.168.2.249:1337/");
