// ! HTTP - Requests and Responses
// ! Pipes and Streams - Readable and Writable

// TODO: Create a server that reads hello world into a brower.
var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => (
    console.log('Requesting URL: ' + req.url),
    res.writeHead(200, {'Content-Type': 'text/plain'}),
    res.end('Hello World!')
));
server.listen(3000, '127.0.0.1');
console.log('Listening to port: 3000...');

// TODO: Create a server that pipes readable data into a browser.
/*
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var server = http.createServer((req, res) => (
    console.log('Requesting URL: ' + req.url),
    res.writeHead(200, {'Content-Type': 'text/plain'}),
    readStream.pipe(res)
));
server.listen(3000, '127.0.0.1');
console.log('Listening to port: 3000...');
*/
// TODO: Read a file into new file using streams.
// Read the data chunks and write the chunks into the new file.
/*
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');
readStream.on('data', (chunk) => (
    console.log('New chunk received.'),
    writeStream.write(chunk)
));
*/