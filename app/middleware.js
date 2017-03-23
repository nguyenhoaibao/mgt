/* eslint-disable */
const bodyParser = require('body-parser');

module.exports = (router) => {
  router.use((req, res, next) => {
    res.json = (params) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(params));
    };

    next();
  });

  router.use(bodyParser.json());
};
