// ! FS - Reading and Writing Files
// ! Passing variables into methods only.

// TODO: Read a file into new file using streams.
var fs = require('fs');

var dir = __dirname;
var readme = "readme.txt";
var writeme = "writeme.txt";
var readStream = fs.createReadStream(`${dir}/${readme}`, 'utf8');
var writeStream = fs.createWriteStream(`${dir}/${writeme}`);

readStream.on('data', (chunk) => {
    console.log("New chunk received!");
    writeStream.write(chunk);
});

// TODO: Synchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.

var folder1 = "folder1";
var message = "Today is Thursday April 16th 2020.";

fs.mkdirSync(folder1);
fs.writeFileSync(`${folder1}/${readme}`, message);
var read1 = fs.readFileSync(`${folder1}/${readme}`, 'utf8');
console.log(read1);
fs.unlink(`${folder1}/${readme}`, () => {
    fs.rmdirSync(folder1);
    console.log(`${folder1} and ${readme} has been removed!`);
});

// TODO: Asynchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it.
// Then remove the file and folder.

var folder2 = "folder2";

fs.mkdir(folder2, () => {
    fs.writeFile(`${folder2}/${readme}`, message, () => {
        var read2 = fs.readFileSync(`${folder2}/${readme}`, 'utf8');
        console.log(read2);
        fs.unlink(`${folder2}/${readme}`, () => {
            fs.rmdirSync(folder2);
            console.log(`${folder2} and ${readme} has been removed!`);
        });
    });
});

