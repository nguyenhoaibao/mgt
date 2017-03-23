const http = require('http');
const chai = require('chai');
const createServer = require('../../app/server');
const app = require('../../app/app');

const expect = chai.expect;

describe('createServer', () => {
  it('should create server success', (done) => {
    const server = createServer(app);
    expect(server).to.be.instanceof(http.Server);

    server.close(() => done());
  });
});
