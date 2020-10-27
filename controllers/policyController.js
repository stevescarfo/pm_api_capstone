const Policy = require('../models/policyModel');


exports.policy_create_post = function(req, res) {
  const policy = new Policy(req.body);

  policy.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send('Policy failed to be added');
    });

};
