// ! FS - Reading and Writing Files
// ! Passing variables into methods only.

// TODO: Synchronously create, read, and print file.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.

var fs = require('fs');
var folder = 'folder';
var file = 'file.txt';
var msg = 'This is a test message!';
/*
fs.mkdirSync(folder);
fs.writeFileSync(`./${folder}/${file}`, msg);
var read = fs.readFileSync(`./${folder}/${file}`, 'utf8');
console.log(read);
*/
// TODO: Synchronously remove folder and file.
/*
fs.unlink(`./${folder}/${file}`, () => (
    fs.rmdirSync(folder),
    console.log(`${folder} and ${file} has been removed!`)
));
*/
// TODO: Asynchronously create, read, and print file.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.
/*
fs.mkdir(folder, () => (
    fs.writeFile(`./${folder}/${file}`, msg, (err) => {
        if (err) throw err;
        console.log(`${folder} and ${file} have been created!`);
    })
));
*/
// TODO: Asynchronously remove folder and file.
fs.unlink(`./${folder}/${file}`, () => (
    fs.rmdir(folder, (err) => {
        if(err) throw err;
        console.log(`${folder} and ${file} has been removed!`);
    })
));