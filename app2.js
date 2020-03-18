var fs = require('fs');

// Read file synchronously. Blocks flow of code until this line is complete.
//var readme = fs.readFileSync('readme.txt', 'utf8'); // 1st arg = filename, 2nd arg = encoding

//fs.writeFileSync('writeme.txt', readme);

// Read file asynchronously.
/*
fs.readFile('readMe.txt', 'utf8', function(err, data){ // 3rd arg, callback function for completion.
    //console.log(data);
    fs.writeFile("writeme.txt", data, (err) => {
        if(err) throw err;
        console.log('writeme.txt has been saved!');
    });
}); 
*/
//console.log('test'); // test prints first since readFile is asyncronous.

// Delete file.
/*
fs.unlink('writeme.txt', (err) => {
    if (err) throw err;
}); 
*/

// Create directory synchronously.
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

// Create directory asynchronously.
/*
fs.mkdir('stuff', function(){   // creates a directory named stuff
    fs.readFile('readme.txt', 'utf8', function(err, data){  // reads in string from readme.txt
        fs.writeFile('./stuff/writeme.txt', data, (err) => {  // writes content into stuff/writeme.txt
            if (err) throw err;
            console.log('./stuff/writeme.txt has been saved!');
        });
    });
});
*/

fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff', (err) => { // deletes empty direction
        if (err) throw err;
        console.log('./stuff/writeme.txt has been deleted!');
    });
});
