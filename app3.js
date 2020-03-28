// ! HTTP - Requests and Responses
// ! Pipes and Streams - Readable and Writable

// TODO: Create a server that pipes readable data into a response.
// A request consists of request + request header.
// A response consists of response data + response header.
var http = require('http');
var fs = require('fs');
/*
var server = http.createServer(function(req, res){
    console.log('Request was made: '+req.url); // displays message in console when a request is made.
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Status: 200, Content: plain text

    var myReadStream = fs.createReadStream(__dirname + '/readstream.txt', 'utf8');
    myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1'); // port:3000, localhost
console.log('Listening to port: 3000...');
*/
// TODO: Read a file into new file using streams.
// Read the data chunks and write the chunks into the new file.
var myReadStream = fs.createReadStream(__dirname + '/readstream.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt');
myReadStream.on('data', (chunk) => (
    console.log('New chunk received'),
    myWriteStream.write(chunk)
));

