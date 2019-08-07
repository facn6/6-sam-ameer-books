
const url = require('url');
const handlers = require('./handlers.js');

const router = (req, res) => {
    const pathname = req.url;
  if (pathname === '/' || pathname === '/main.css' || pathname === '/app.js') {
    handlers.homeHandler(req, res);
  } else if (pathname === '/books') {
    handlers.bookListHandler(req, res);
  } else if (pathname === '/create-book') {
    handlers.addBookHandler(req, res);
  }
  else {
    handlers.errorHandler(req, res);
  }
};

module.exports = router;