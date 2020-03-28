// ! HTTP - Requests and Responses
var http = require('http');

// TODO: Create a server with a function that contains 2 arguments.
// A request consists of request + request header.
// A response consists of response data + response header.
var server = http.createServer(function(req, res){
    console.log('Request was made: '+req.url); // displays message in console when a request is made.
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Status: 200, Content: plain text
    res.end('Hello World!'); // Shows on the browser
});

// TODO: Have the server listen for a request.
server.listen(3000, '127.0.0.1'); // port:3000, localhost
console.log('Listening to port:3000...');
