require('dotenv').config();
const faker = require('faker');
const request = require('supertest');
const chai = require('chai');
const createServer = require('../../../app/server');
const app = require('../../../app/app');

const server = createServer(app);

function createRequest() {
  return request(server);
}

function createNewMember() {
  const payload = {
    email: faker.internet.email(),
    fullname: faker.name.findName()
  };

  return createRequest()
    .post('/members')
    .send(payload)
    .set('Accept', 'application/json');
}

function createNewReward() {
  const payload = {
    code: faker.random.uuid(),
    description: faker.lorem.sentence()
  };

  return createRequest()
    .post('/rewards')
    .send(payload)
    .set('Accept', 'application/json');
}

global.request = request;
global.expect = chai.expect;
global.createRequest = createRequest;
global.createNewMember = createNewMember;
global.createNewReward = createNewReward;
