const express = require('express');
const router = express.Router();
const { getWeatherByDistrict } = require('../controllers/weatherController');

router.get('/:district', getWeatherByDistrict);

module.exports = router;