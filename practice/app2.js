// ! FS - Reading and Writing Files
// ! Passing variables into methods only.

// TODO: Synchronously create, read, and print file.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.
/*
var fs = require('fs');
var folder = 'testfolder';
var writeme = 'writeme.txt';
var msg = 'This is a test message';

fs.mkdirSync(folder);
fs.writeFileSync(`./${folder}/${writeme}`, msg);
var readme = fs.readFileSync(`./${folder}/${writeme}`, 'utf8');
console.log(readme);
*/
// TODO: Synchronously remove folder and file.
/*
fs.unlink(`./${folder}/${writeme}`, (err) => {
    if (err) throw err;
    fs.rmdirSync(folder);
    console.log(`${folder} and ${writeme} has been removed!`);
});
*/

// TODO: Asynchronously create, read, and print file.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.
var fs = require('fs');
var folder = 'test';
var writeme = 'writeme.txt';
var data = 'This is a test message';
/*
fs.mkdir(folder, () => {
    fs.writeFile(`./${folder}/${writeme}`, data, (err) => {
        if (err) throw err;
        fs.readFile(`./${folder}/${writeme}`, 'utf8', (err) => {
            if (err) throw err;
            console.log(data);
        });
    });
});
*/
// TODO: Asynchronously remove folder and file.
fs.unlink(`./${folder}/${writeme}`, () => {
    fs.rmdir(folder, (err) => {
        if (err) throw err;
        console.log(`${folder} and ${writeme} has been removed!`);
    });
});
