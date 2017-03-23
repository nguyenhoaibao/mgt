/* eslint-disable */
require('dotenv').config();
const faker = require('faker');
const router = require('../../../app/app');

describe('Reward', () => {
  it('should create new reward success', (done) => {
    createNewReward()
      .then((res) => {
        expect(res.body).to.contain.keys('id');

        done();
      });
  });

  it('should delete reward success', (done) => {
    createNewReward()
      .then((res) => {
        const rewardId = res.body.id;

        return createRequest().delete(`/rewards/${rewardId}`);
      })
      .then((res) => {
        expect(res.body).to.contain.keys('success');
        expect(res.body.success).to.equal(true);

        done();
      });
  });
});

