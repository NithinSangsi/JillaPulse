const weatherService = require('../services/weatherService');

exports.getWeatherByDistrict = async (req, res) => {
  try {
    const { district } = req.params;
    const data = await weatherService.fetchWeather(district);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};