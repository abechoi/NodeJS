var fs = require('fs');

// Syncronous method, blocks flow of code until this line is complete.
//var readme = fs.readFileSync('readme.txt', 'utf8'); // 1st arg = filename, 2nd arg = encoding

//fs.writeFileSync('writeme.txt', readme);

// Asyncronous method
fs.readFile('readMe.txt', 'utf8', function(err, data){ // 3rd arg, callback function for completion.
    //console.log(data);
    fs.writeFile("writeme.txt", data, (err) => {
        if(err) throw err;
        console.log('writeme.txt has been saved!');
    });
}); 
//console.log('test'); // test prints first since readFile is asyncronous.