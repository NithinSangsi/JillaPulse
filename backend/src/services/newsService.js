const axios = require('axios');

exports.fetchNews = async (district) => {
  const apiKey = process.env.NEWSDATA_API_KEY;

  const response = await axios.get(
    'https://newsdata.io/api/1/news',
    {
      params: {
        apikey: apiKey,
        country: 'in',
        language: 'en',
        q: district
      }
    }
  );

  if (!response.data.results) return [];

  return response.data.results.slice(0, 5).map(article => ({
    title: article.title,
    description: article.description,
    source: article.source_id,
    image: article.image_url,
    link: article.link,
    publishedAt: article.pubDate,
    category: article.category,
    country: article.country,
    language: article.language
  }));
};