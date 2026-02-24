const newsService = require('../services/newsService');

exports.getNewsByDistrict = async (req, res) => {
  try {
    const { district } = req.params;

    const news = await newsService.fetchNews(district);

    res.json(news);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};