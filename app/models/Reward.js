const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  code: String,
  description: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'Member' }]
});

module.exports = mongoose.model('Reward', rewardSchema);

