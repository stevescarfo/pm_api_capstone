const express = require('express');
const router = express.Router();

// Policy Home page route.
router.get('/', function (req, res) {
  res.send('Policy home page');
})

module.exports = router;
