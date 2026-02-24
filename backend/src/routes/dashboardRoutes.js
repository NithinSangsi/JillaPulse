const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboardController');

router.get('/:district', getDashboardData);

module.exports = router;