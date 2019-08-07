const fs = require('fs');
const path = require('path');
const url = require('url');

const homeHandler = (req, res) => {
  const { pathname } = url.parse(req.url);
  const extension = pathname.split('.').length > 1 ? pathname.split('.')[1] : 'html';
  const endPath = pathname === '/' ? 'index.html' : pathname;
  const filepath = path.join(__dirname, '..', 'public', endPath);
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

const errorHandler = (req, res) => {
  res.writeHead(404, {
    'content-type': 'text/plain',
  });
  res.end('404: page not found');
};

module.exports = {
  homeHandler,
  errorHandler,
};
