require('dotenv').config({ silent: true });

const createServer = require('./app/server');
const app = require('./app/app');
const util = require('./app/util');

const server = createServer(app);

server.listen(util.getEnv('APP_PORT', 3000), () => {
  console.log('App start...');
});
