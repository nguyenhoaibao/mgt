const Router = require('router');
const db = require('./db');

const router = Router();

require('./middleware')(router);
require('./routes')(router, db);

module.exports = router;
