const weatherService = require('../services/weatherService');
const newsService = require('../services/newsService');

exports.getDashboardData = async (req, res) => {
  const { district } = req.params;

  try {
    const weather = await weatherService.fetchWeather(district);
    console.log("Weather fetched successfully");
    
    const news = await newsService.fetchNews(district);
    console.log("News fetched successfully");

    res.json({
      district,
      weather,
      news
    });

  } catch (error) {
    console.error("Dashboard error full:", error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
};