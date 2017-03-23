/* eslint-disable */
require('dotenv').config();
const faker = require('faker');

describe('Member', () => {
  it('should create new member success', (done) => {
    createNewMember()
      .then((res) => {
        expect(res.body).to.contain.keys('id');

        done();
      });
  });

  it('should delete member success', (done) => {
    createNewMember()
      .then((res) => {
        const memberId = res.body.id;

        return createRequest().delete(`/members/${memberId}`);
      })
      .then((res) => {
        expect(res.body).to.contain.keys('success');
        expect(res.body.success).to.equal(true);

        done();
      });
  });

  it('should reward to member success', (done) => {
    Promise.all([createNewMember(), createNewReward()])
      .then((results) => {
        const memberId = results[0].body.id;
        const rewardId = results[1].body.id;

        return createRequest().patch(`/members/${memberId}/rewards`)
          .set('Accept', 'application/json')
          .send({ reward_ids: [rewardId] });
      })
      .then((res) => {
        expect(res.body.success).to.equal(true);

        done();
      });
  });

  it('should retrieve member and rewards success', (done) => {
    Promise.all([createNewMember(), createNewReward()])
      .then((results) => {
        const memberId = results[0].body.id;
        const rewardId = results[1].body.id;

        return createRequest().patch(`/members/${memberId}/rewards`)
          .set('Accept', 'application/json')
          .send({ reward_ids: [rewardId] })
          .then(() => createRequest().get(`/members/${memberId}`));
      })
      .then((res) => {
        expect(res.body).to.contain.keys('email', 'fullname', 'rewards');
        expect(res.body.rewards.length).to.be.above(0);

        done();
      });
  })
});

