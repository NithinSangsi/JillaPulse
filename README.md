# 🌍 JillaPulse
# <p align="center">
  <img src="assets/JP.png" alt="JillaPulse Logo" width="60" />
  <span style="font-size: 32px; font-weight: bold; vertical-align: middle; margin-left: 10px;">
    JillaPulse
  </span>
 </p>

**JillaPulse provides real-time district-level Weather insights and the latest News updates across India in one unified dashboard.**  
**It helps users instantly understand local climate conditions and trending headlines for any selected district.**

---

## 🚀 Project Overview

JillaPulse is a full-stack web application that delivers:

- 🌦️ Live Weather data for Indian districts
- 📰 Top News related to the selected district
- 🌗 Light & Dark Mode UI
- 📍 State & District selection system
- 📊 Clean dashboard-style weather visualization
- 🎯 Real-time API integration

The project was built **backend-first**, followed by a responsive and modern frontend implementation.

---

# 🏗️ Architecture

```
JillaPulse/
│
├── backend/      → Node.js + Express API
├── frontend/     → React + Vite UI
└── README.md
```

---

# 🔥 Key Features

### 🌦️ Weather Dashboard
- Temperature
- Feels Like
- Humidity
- Pressure (converted hPa → kPa)
- Wind Speed (converted m/s → km/h)
- Wind Direction (deg → compass direction)
- Visibility (converted meters → km)
- Visibility Quality (Good / Moderate / Bad with color coding)
- Weather Icons from API

### 📰 News Section
- Minimum 10 news articles
- Image handling with fallback
- Truncated descriptions
- Read More external links
- Grid layout (Responsive)

### 🎨 UI Features
- Fully Responsive Design
- Light & Dark Mode Toggle (applies to whole webpage)
- Smooth theme transitions
- Styled weather cards
- News section container layout

---

# 🧠 What I Learned

- Building REST APIs using Express
- API integration with OpenWeather & News APIs
- Data transformation & unit conversion
- Frontend state management in React
- Conditional rendering & dynamic styling
- Theme implementation (Dark/Light Mode)
- Responsive UI design
- Git & project structuring best practices
- Secure environment variable handling

---

# ⚙️ Tech Stack

## Backend
- Node.js
- Express.js
- Axios
- CORS
- dotenv

## Frontend
- React (Vite)
- Axios
- CSS3 (Custom Styling)

---

# 📦 Backend Setup

## 1️⃣ Navigate to backend folder

```bash
cd backend
```

## 2️⃣ Install Dependencies

```bash
npm install express axios cors dotenv
```

Or simply:

```bash
npm install
```

## 3️⃣ Create Environment File

Create a `.env` file inside the `/backend` folder.

You will need to generate API keys from the following services:

### 🌦️ 1. OpenWeather API (Weather Data)

🔗 Sign up here:  
https://openweathermap.org/api  

- Create a free account  
- Generate your API key  
- This API provides:
  - Temperature
  - Wind speed & direction
  - Pressure
  - Humidity
  - Visibility
  - Weather condition icons

---

### 📰 2. NewsData.io API (District-Based News)

🔗 Sign up here:  
https://newsdata.io  

- Create a free account  
- Generate your API key  

✅ **Why NewsData.io?**

NewsData.io is used because:
- It supports location-based filtering
- It provides region and keyword-based news search
- It allows filtering by country (India)
- It is better suited for district-related news queries compared to many other free news APIs

This makes it suitable for fetching news related to a specific district selected by the user.

---

### 📁 Add the following inside `/backend/.env`

```
OPENWEATHER_API_KEY=your_openweather_api_key
NEWSDATA_API_KEY=your_newsdata_api_key
PORT=5000
```

## 4️⃣ Start Backend Server

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# 💻 Frontend Setup

## 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

## 2️⃣ Install Dependencies

```bash
cd backend
npm install
```

If axios not installed:

```bash
npm install axios
nodemon server.js
```

Backend runs on PORT 5000 [in my case]

In Terminal :
Server running on port 5000
Weather fetched successfully
News fetched successfully

## 3️⃣ Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔗 API Integration

### 🌦️ Weather API
- OpenWeather API
- Used for:
  - Temperature
  - Wind
  - Pressure
  - Visibility
  - Weather Icons

### 📰 News API
- Used for fetching district-based headlines
- Displays minimum 10 news cards

---

# 🔄 Data Conversions Implemented

| Parameter | Original | Converted |
|-----------|----------|-----------|
| Pressure  | hPa      | kPa       |
| Wind Speed | m/s     | km/h      |
| Visibility | meters  | km        |
| Wind Degree | deg    | N/NE/E/S/W |

---

# 🌗 Theme System

- Default: Light Mode
- Toggle Button → Switch to Dark Mode
- Entire webpage transitions smoothly
- Weather & News sections adapt dynamically

---


# 📸 Future Improvements

- 📍 GPS-based auto district detection
- 📊 Weather forecast (7-day)
- 📈 Graphical data visualization
- 🌬️ Animated wind direction indicator
- 🗂️ Bookmark districts
- 🌍 Deployment (Render / Vercel)

---

# 👨‍💻 Developer

Built with focus on:
- Clean architecture
- Real-world API integration
- Production-style UI
- Practical learning & implementation

---

# 📄 License

This project is built for educational and demonstration purposes.

---

# ⭐ Final Note

JillaPulse demonstrates how real-time APIs, backend logic, and modern frontend UI can be combined to create a clean, responsive, and informative district-level dashboard for India.
