const Promise = require('bluebird');
const mongoose = require('mongoose');
const util = require('./util');

const Member = require('./models/Member');
const Reward = require('./models/Reward');

const MONGO_HOST = util.getEnv('MONGO_HOST');
const MONGO_PORT = util.getEnv('MONGO_PORT');
const MONGO_DB = util.getEnv('MONGO_DB');

mongoose.Promise = Promise;
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);

module.exports = {
  createNewMember(payload) {
    const member = new Member(payload);

    return member.save();
  },

  deleteMember(memberId) {
    return Member.remove({ _id: memberId });
  },

  rewardTo(memberId, rewardIds) {
    return Member.update({ _id: memberId }, { rewards: rewardIds });
  },

  findMemberById(memberId) {
    return Member.findOne({ _id: memberId })
      .populate('rewards', ['code', 'description']);
  },

  createNewReward(payload) {
    const reward = new Reward(payload);

    return reward.save();
  },

  deleteReward(rewardId) {
    return Reward.remove({ _id: rewardId });
  }
};
