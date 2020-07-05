//! Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes. - Carl Jung

fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/*
readStream.on('data', (chunk) => {
    console.log('- - - - NEW CHUNK - - - -');
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk);
});
*/


//TODO: piping
readStream.pipe(writeStream);