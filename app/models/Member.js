const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  email: String,
  fullname: String,
  rewards: [{ type: Schema.Types.ObjectId, ref: 'Reward' }]
});

module.exports = mongoose.model('Member', memberSchema);
