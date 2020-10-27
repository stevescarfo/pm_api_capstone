const express = require('express');
const router = express.Router();
var policy_controller = require('../controllers/policyController');



router.get('/', function (req, res) {
  res.send('Policy home page');
});

router.post('/', policy_controller.policy_create_post);


module.exports = router;