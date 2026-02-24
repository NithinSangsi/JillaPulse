import { useState } from "react";
import axios from "axios";
import StateDistrictSelector from "./components/StateDistrictSelector";
import WeatherCard from "./components/WeatherCard";
import NewsList from "./components/NewsList";
import logo from "./assets/JP.png";
import "./App.css";

function App() {
  const [dashboardData, setDashboardData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchDashboard = async (district) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/dashboard/${district}`
      );
      setDashboardData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <nav className="navbar">
        {/* <h2 className="app-title">JillaPulse</h2> */}
        <div className="navbar-left">
          <img src={logo} alt="JillaPulse Logo" className="navbar-logo" />
          <h1 className="app-title">Jilla Pulse</h1>
        </div>
        <button className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light ☀️" : "Dark 🌙"}
        </button>
    </nav>

      {!dashboardData && (
        <div className="welcome">
          <h1>Welcome to JillaPulse</h1>
          <p>Select a state and district to view weather & news</p>
        </div>
      )}

      <StateDistrictSelector onSearch={fetchDashboard} />

      {dashboardData && (
        <>
          <h1 className="district-title">
            {dashboardData.district}
          </h1>

          <section>
            <h1>Weather</h1>
            <WeatherCard weather={dashboardData.weather} />
          </section>

          <section>
            <h1>News</h1>
            <NewsList news={dashboardData.news} />
          </section>
        </>
        
      )}
  
    {/* ✅ ADD FOOTER HERE */}
    <footer className="footer">
      <div className="footer-content">
        <h3>JillaPulse</h3>
        <div className="footer-links">
          <span>Powered by OpenWeather & NewsData.io</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} JillaPulse <br></br>All rights reserved
        </p>
      </div>
    </footer>

  </div>

  );
}

export default App;