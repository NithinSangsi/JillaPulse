function WeatherCard({ weather }) {

  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

// Visibility parsing from "10000 meters"
let visibilityDisplay = "N/A";
let visibilityStatus = "";
let visibilityClass = "";


if (weather.visibility?.value) {

  // Extract number from string like "10000 meters"
  const numericValue = parseFloat(weather.visibility.value);

  if (!isNaN(numericValue)) {

    const visibilityKm = numericValue / 1000;

    if (visibilityKm < 2) {
      visibilityStatus = "Bad";
      visibilityClass = "visibility-bad";

    } 
    else if (visibilityKm <= 5) {
      visibilityStatus = "Moderate";
      visibilityClass = "visibility-moderate";

    } 
    else {
      visibilityStatus = "Good";
      visibilityClass = "visibility-good";

    }

    visibilityDisplay =
      numericValue >= 1000
        // ? `${visibilityKm.toFixed(1)} km`
        ? `${Math.round(visibilityKm)} km`
        : `${Math.round(numericValue)} m`;
        // : `${numericValue} m`;
  }
}

// Pressure conversion: hPa → kPa
let pressureDisplay = "N/A";

if (weather.pressure?.value) {

  // Extract numeric value from "1012 hPa"
  const pressureHpa = parseFloat(weather.pressure.value);

  if (!isNaN(pressureHpa)) {
    const pressureKpa = pressureHpa / 10;

    // pressureDisplay = `${pressureKpa.toFixed(1)} kPa`;
    pressureDisplay = `${Math.round(pressureKpa)} kPa`;
  }
}
// Convert wind degree to direction
function getWindDirection(deg) {
  if (deg >= 337.5 || deg < 22.5) return "N";
  if (deg >= 22.5 && deg < 67.5) return "NE";
  if (deg >= 67.5 && deg < 112.5) return "E";
  if (deg >= 112.5 && deg < 157.5) return "SE";
  if (deg >= 157.5 && deg < 202.5) return "S";
  if (deg >= 202.5 && deg < 247.5) return "SW";
  if (deg >= 247.5 && deg < 292.5) return "W";
  return "NW";
}

// Wind Speed Conversion: m/s → km/h

let windDisplay = "N/A";

if (weather.windSpeed?.value) {

  const windMs = parseFloat(weather.windSpeed.value);

  if (!isNaN(windMs)) {

    const windKmh = windMs * 3.6;

    const windDeg = weather.windDirection?.value;
    const direction = windDeg !== undefined
      ? getWindDirection(windDeg)
      : "";

    windDisplay = `${Math.round(windKmh)} km/h ${direction}`;
  }
}

  return (
    <div className="weather-card">

      <div className="weather-main-center">
        <h1 className="weather-district">
    {weather.location}
  </h1>

        <img src={iconUrl} alt="weather icon" />
       
        <h2 className="weather-temp">
            {weather.temperature.value}{weather.temperature.unit}
        </h2>
        <p className="weather-desc">
          {weather.weatherCondition === "Clouds" ? "☁️ Scattered Clouds" :
           weather.weatherCondition === "Clear" ? "☀️ Clear Sky" :
           weather.weatherCondition === "Rain" ? "🌧 Rainy" :
           weather.weatherCondition === "Thunderstorm" ? "⛈ Thunderstorm" :
           weather.weatherCondition === "Drizzle" ? "🌦 Drizzle" :
           weather.weatherCondition === "Mist" ? "🌫 Mist" :
           weather.weatherCondition === "Snow" ? "❄️ Snow" :
           weather.description}
        </p>
      </div>

      <div className="weather-details-grid">

        <div>🌡 Temperature: {weather.temperature.value}{weather.temperature.unit}</div>
        <div>🤒 Feels Like: {weather.feelsLike.value}{weather.feelsLike.unit}</div>
        <div>💧 Humidity: {weather.humidity.value}{weather.humidity.unit}</div>
        <div>🌬 Wind Speed: {windDisplay}</div>
        <div>🔽 Pressure: {pressureDisplay}</div>
        <div className={`visibility-status ${visibilityClass}`}>👁 Visibility: {visibilityDisplay} {visibilityStatus}</div>
        <div>📍 Latitude: {weather.coordinates.latitude}</div>
        <div>📍 Longitude: {weather.coordinates.longitude}</div>

      </div>
    </div>
  );
}

export default WeatherCard;