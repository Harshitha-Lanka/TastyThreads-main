const express = require('express');
const router = express.Router();
const View = require('../models/View');
const viewController = require('../controllers/viewController');

router.post('/', viewController.submitView);
router.get('/', viewController.getViews); // ✅ Add this to fetch all views

module.exports = router;