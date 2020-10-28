const Policy = require('../models/policyModel');

exports.policy_create_post = function (req, res) {
  if (!req.body.name) {
    res.status(400).send('Name Field is required');
  }

  const policy = new Policy(req.body);

  policy.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send('Policy failed to be added');
    });

};

exports.policy_list_get = function (req, res) {
  Policy.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send('Policies failed to be retrieved.');
    });

};

exports.policy_getById = (req, res) => {
  const id = req.params.id;
  console.log(`GET the policy info for ${id}`);
  if (id != null && id != '') {
    Policy
      .findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ Message: `No Policy Data Found with id ${id}` });
        }
        else {
          res.status(200).send(data);
        }
      })
      .catch(error => {
        res.status(400).send({ ErrorMessage: error.message });
      });
  }
};

exports.policy_updateById = (req, res) => {
  const id = req.params.id;
  console.log(`Update the policy info for ${id}`);
  Policy
    .findOneAndUpdate(id, req.body, { new: true })
    .then(data => {
      if (!data) {
        res.status(404).send({ Message: `No Policy Data Found with id ${id}` });
      }
      else {
        res.status(200).send(data);
      }
    })
    .catch(error => {
      res.status(400).send({ ErrorMessage: error.message });
    });

};

exports.policy_deleteById = (req, res) => {
  const id = req.params.id;
  console.log(`Delete the policy info for ${id}`);
    Policy
      .findByIdAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ Message: `No Policy Data Found with id ${id}` });
        }
        else {
          res.status(200).send({ Message: `Successfully Deleted Policy with id ${id}` });
        }
      })
      .catch(error => {
        res.status(400).send({ ErrorMessage: error.message });
      });
};

exports.policy_list_delete = function (req, res) {
  Policy.deleteMany()
    .then(data => {
      res.status(200).json("Successfully deleted All Policies");
    })
    .catch(err => {
      res.status(400).send('No Policies to Delete.');
    });

};