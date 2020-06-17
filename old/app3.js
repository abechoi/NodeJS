// ! HTTP - Requests and Responses
// ! Pipes and Streams - Readable and Writable

// TODO: Create a server that pipes readable data into a browser.
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + "/readme.txt", 'utf8');

var host = "127.0.0.1";
var port = 3000;

var content = {'Content-Type': 'text/plain'};
var status = 200;

var server = http.createServer((req, res) => {
    console.log(`Requesting URL: ${req.url}`);
    res.writeHead(status, content);
    readStream.pipe(res);
});

server.listen(port, host);
console.log(`Listening to ${host}:${port}`);

// TODO: Create a server that reads an html file into a browser.

readStream = fs.createReadStream(__dirname + "/index.html", 'utf8');
content = {'Content-Type': 'text/html'};

var server = http.createServer((req, res) => {
    console.log(`Requesting URL: ${req.url}`);
    res.writeHead(status, content);
    readStream.pipe(res);
});

server.listen(port, host);
console.log(`Listening to ${host}:${port}`);

// TODO: Create a server that reads a JSON into a browser.

content = {'Content-Type': 'application/json'};

var server = http.createServer((req, res) => {
    console.log(`Requesting URL: ${req.url}`);
    res.writeHead(status, content);
    
    var myObj = {
        name: 'Abe',
        age: 33
    };

    res.end(JSON.stringify(myObj));
});

server.listen(port, host);
console.log(`Listening to ${host}:${port}`);
