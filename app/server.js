const http = require('http');
const finalhandler = require('finalhandler');

module.exports = function createServer(app) {
  return http.createServer((req, res) => {
    app(req, res, finalhandler(req, res));
  });
};
