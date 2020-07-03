const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  path = './';
  switch(req.url){
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path+= 'about.html';
      res.statusCode = 200;
      break;
    case '/aboutme':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if(err){
      console.log(err);
      res.end();
    }else{
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Listening to port: 3000...');
});