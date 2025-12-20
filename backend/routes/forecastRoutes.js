const express = require('express');
const router = express.Router();
const {
  getForecasts,
  getForecast,
  createForecast,
  updateForecast,
  deleteForecast,
  generateForecast
} = require('../controllers/forecastController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getForecasts).post(protect, createForecast);
router.route('/generate').post(protect, generateForecast);
router.route('/:id').get(protect, getForecast).put(protect, updateForecast).delete(protect, deleteForecast);

module.exports = router;

