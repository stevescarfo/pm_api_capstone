const express = require('express');

const policy_controller = require('../controllers/policyController');

const router = express.Router();

// Get all Policies
router.get('/', policy_controller.policy_list_get);

// Get Policies by ID
router.get('/:id', policy_controller.policy_getById);

// Update Policies by ID
router.put('/:id', policy_controller.policy_updateById);

// Add a new Policy
router.post('/', policy_controller.policy_create_post);

// Delete a Policy
router.delete('/:id', policy_controller.policy_deleteById);

// Delete all Policies
router.delete('/', policy_controller.policy_list_delete);


module.exports = router;