const axios = require('axios');

exports.fetchWeather = async (district) => {
  const apiKey = process.env.WEATHER_API_KEY;

  const response = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: `${district},IN`,
        appid: apiKey,
        units: 'metric'
      }
    }
  );

  const data = response.data;

  return {
    location: data.name,
    coordinates: {
      latitude: data.coord.lat,
      longitude: data.coord.lon
    },
    temperature: {
      value: `${data.main.temp}°C`,
    },
    feelsLike: {
      value: `${data.main.feels_like}°C`,
    },
    humidity: {
      value: `${data.main.humidity}%`,
    },
    pressure: {
      value: `${data.main.pressure} hPa`,
    },
    windSpeed: {
      value: `${data.wind.speed} m/s`,
    },
    windDirection: {
      value: `${data.wind.deg}°`,
  },
    visibility: {
      value: `${data.visibility} meters`,
    },
    weatherCondition: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon
  };
};