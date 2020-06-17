// ! Basic Routing
// TODO: Create a server that routes to a JSON, HTML, and 404 page.
// /home or / should direct to index.html.
// /contact should direct to contact.html.
// /api/ninjas should direct to a JSON array.
// Anything else should direct to a 404 page.

var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;
var status = 200;
var htmlContent = {'Content-Type': 'text/html'};
var jsonContent = {'Content-Type': 'application/json'};

var dir = __dirname;
var index = "index.html";
var contact = "contact.html";
var error = "404.html";

var server = http.createServer((req, res) => {

    console.log(`Requesting URL: ${req.url}`);

    if(req.url === '/home' || req.url === '/'){

        res.writeHead(status , htmlContent);
        fs.createReadStream(`${dir}/${index}`).pipe(res);
    }
    else if(req.url === '/contact'){

        res.writeHead(status , htmlContent);
        fs.createReadStream(`${dir}/${contact}`).pipe(res);
    }
    else if(req.url === '/api/ninjas'){

        var ninjas = [{name: 'Abe', age: 33}, {name: 'Choi', age: 22}];
        res.writeHead(status , jsonContent);
        res.end(JSON.stringify(ninjas));
    }
    else{
        
        res.writeHead(404 , htmlContent);
        fs.createReadStream(`${dir}/${error}`).pipe(res);
    }
});

server.listen(port, host);
console.log(`Listening to ${host}:${port}`);