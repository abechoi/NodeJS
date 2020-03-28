// ! HTTP - Requests and Responses
// ! Pipes and Streams - Readable and Writable

// TODO: Create a server that pipes readable data into a response.
// A request consists of request + request header.
// A response consists of response data + response header.
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var server = http.createServer((req, res) => (
    console.log('Requesting URL: ' + req.url),
    res.writeHead(200, {'Content-Type': 'text/plain'}),
    readStream.pipe(res)
));
server.listen(3000, '127.0.0.1');
console.log('Listnening to port: 3000...');


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