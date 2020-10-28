const express = require('express');

const policy_controller = require('../controllers/policyController');

const router = express.Router();



router.get('/', function (req, res) {
  res.send('Policy home page');
});

router.post('/', policy_controller.policy_create_post);


module.exports = router;