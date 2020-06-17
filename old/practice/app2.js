// ! FS - Reading and Writing Files
// ! Passing variables into methods only.

// TODO: Read a file into new file using streams.
var fs = require('fs');

var dir = __dirname;
var readme = "readme.txt";
var writeme = "writeme.txt";

var readstream = fs.createReadStream(`${dir}/${readme}`, 'utf8');
var writestream = fs.createWriteStream(`${dir}/${writeme}`);

readstream.on('data', (chunk) => {
    console.log("SUCCESS!");
    writestream.write(chunk);
});

// TODO: Synchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.
var folder = "folder";
var message = "Choi Jong-Hae";
var deleteMe = "writeme.txt";

fs.mkdirSync(folder);
fs.writeFileSync(`${folder}/${deleteMe}`, message);

var read = fs.readFileSync(`${folder}/${deleteMe}`, 'utf8');
console.log(read);

fs.unlink(`${folder}/${deleteMe}`, () => {
    fs.rmdirSync(folder);
    console.log("SUCCESS!");
});

// TODO: Asynchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it.
// Then remove the file and folder.

