const express = require('express');
const router = express.Router();
const { getInventoryOptimization } = require('../controllers/inventoryController');
const { protect } = require('../middleware/auth');

router.route('/optimization').get(protect, getInventoryOptimization);

module.exports = router;
