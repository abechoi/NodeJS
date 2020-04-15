// ! FS - Reading and Writing Files
// ! Passing variables into methods only.

// TODO: Synchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it. Execute.
// If execution was successful, remove the folder.
var fs = require('fs');

var folder = "folder";
var deleteMe = "delete.txt";
var message = "My name is Abe Choi and my Korean name is Choi Jong-Hae.";

fs.mkdirSync(folder);
fs.writeFileSync(`${folder}/${deleteMe}`, message);

var read = fs.readFileSync(`${folder}/${deleteMe}`, 'utf8');

console.log(read);

fs.unlink(`${folder}/${deleteMe}`, () => {
    fs.rmdirSync(folder);
    console.log('folder and file has been removed!');
});

// TODO: Asynchronously create, read, and print file then remove it.
// Create a folder and write a file with a message.
// Read the file into a variable and print it.
// Then remove the file and folder.

fs.mkdir(folder, () => {
    fs.writeFile(`${folder}/${deleteMe}`, message, () => {
        var read = fs.readFileSync(`${folder}/${deleteMe}`, 'utf8');
        console.log(read);
        fs.unlink(`${folder}/${deleteMe}`, () => {
            fs.rmdirSync(folder);
            console.log('Folder and file has been removed!');
        });
    });
});


// TODO: Read a file into new file using streams.
var readStream = fs.createReadStream(__dirname + "/readme.txt", 'utf8');
var writeStream = fs.createWriteStream(__dirname + "/writeme.txt");

readStream.on('data', (chunk) => {
    console.log('New chunk has been received.');
    writeStream.write(chunk);
});