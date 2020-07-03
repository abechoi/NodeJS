//! Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes. - Carl Jung
//TODO streams
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt');

readStream('data', (chunk) => {
    writeStream(chunk);
});

}
//TODO: piping
readStream.pipe(writeStream);