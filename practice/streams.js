//! Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes. - Carl Jung
//TODO streams
const fs = require('fs');

const readStream = fs.readStream('./docs/blogs2.txt', {encoding: 'utf8'});
const writeStream = fs.writeStream('./docs/blog1.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

//TODO: piping
readStream.pipe(writeStream);