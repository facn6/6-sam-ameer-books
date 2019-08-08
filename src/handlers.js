const fs = require('fs');
const path = require('path');
const url = require('url');
const browseBooks = require('./queries/browseBooks.js');
const querystring = require('querystring');
const addBook = require('./queries/addBook.js');

const homeHandler = (req, res) => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filepath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
}

const publicHandler = (req, res) => {
  const { pathname } = url.parse(req.url);
  const extension =  pathname.split('.')[1]
  const filepath = path.join(__dirname, '..', 'public', pathname);
  const extensionObj = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
  };

  fs.readFile(filepath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      res.writeHead(200, { 'content-type': extensionObj[extension] });
      res.end(file);
    }
  });
};

const bookListHandler = (req, response) => {
  browseBooks((err, res) => {
    if (err) {
      response.writeHead(500, {'Content-Type': 'text/html'});
      response.end('<h1>Sorry, there was a problem finding the books<h1>');
      console.log(err);
    } else {
      let output = JSON.stringify(res);
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(output);
    }
  });
};

const addBookHandler = (request, response) => {
  let reqBody = ''
  request.on('data', (data) => {
    reqBody += data;
  })
  request.on('end', () => {
    const book = querystring.parse(reqBody);
    addBook(book, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        response.writeHead(301, { 'Location': '/' });
        response.end();
      }
    })
  })
}

const errorHandler = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/plain',
  });
  res.end('404: page not found');
};

module.exports = {
  homeHandler,
  bookListHandler,
  publicHandler,
  addBookHandler,
  errorHandler,
};
