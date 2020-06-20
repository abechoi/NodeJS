//TODO: write files
const fs = require('fs');

const writeFile = fs.writeFile('./docs/blog1.txt', "Hello everybody!", () => {
    console.log("File created!");
});

//TODO: read files
const readFile = fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

//TODO: directories
if(!fs.existsSync('./folder')){
    fs.mkdir('./folder', () => {
        console.log('Folder created!');
    });
}else{
    fs.rmdir('./folder', () => {
        console.log('Folder deleted!');
    });
}

//TODO: delete files
if(fs.existsSync('./docs/blog1.txt')){
    fs.unlink('./docs/blog1.txt', () => {
        console.log('File deleted!');
    });
}