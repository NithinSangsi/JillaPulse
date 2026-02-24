const express = require('express');
const router = express.Router();
const { getNewsByDistrict } = require('../controllers/newsController');

router.get('/:district', getNewsByDistrict);

module.exports = router;