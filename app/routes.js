module.exports = (router, db) => {
  router.post('/members', (req, res) => {
    const payload = req.body;

    return db.createNewMember(payload)
      .then(member => res.json({ id: member._id }))
      .catch(error => res.end(error));
  });

  router.delete('/members/:memberId', (req, res) => {
    const memberId = req.params.memberId;

    return db.deleteMember(memberId)
      .then(() => res.json({ success: true }))
      .catch(error => res.end(error));
  });

  router.patch('/members/:memberId/rewards', (req, res) => {
    const memberId = req.params.memberId;
    const rewardIds = req.body.reward_ids;

    return db.rewardTo(memberId, rewardIds)
      .then(() => res.json({ success: true }))
      .catch(error => res.end(error));
  });

  router.get('/members/:memberId', (req, res) => {
    const memberId = req.params.memberId;

    return db.findMemberById(memberId)
      .then(member => res.json(member))
      .catch(error => res.end(error));
  });

  router.post('/rewards', (req, res) => {
    const payload = req.body;

    return db.createNewReward(payload)
      .then(reward => res.json({ id: reward._id }))
      .catch(error => res.end(error));
  });

  router.delete('/rewards/:rewardId', (req, res) => {
    const rewardId = req.params.rewardId;

    return db.deleteReward(rewardId)
      .then(() => res.json({ success: true }))
      .catch(error => res.end(error));
  });
};
