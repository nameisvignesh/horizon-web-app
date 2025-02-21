"use client";
import React, { useState } from "react";
import axios from "axios";

// Function to fetch weather data
export const fetchWeather = async (city) => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch weather data");
  }

  return response.data;
};

const Weather = () => {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state before fetching

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center my-8 px-4" style={{ textAlign: "center", margin: "20px" }}>
      <h1 className="text-3xl font-bold mb-5">Horizon</h1>
      <form onSubmit={handleSearch} className="bg-slate-300 flex flex-col sm:flex-row px-5 py-5 sm:px-10 sm:py-6 rounded-lg shadow-md">
        <input
          className="bg-white text-black border-black border-t-2 border-b-2 border-l-2 rounded-l-3xl px-5 py-2 mb-3 sm:mb-0 sm:w-64"
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="text-white bg-red-500 rounded-r-3xl border-black border-2 px-4 py-2 w-full sm:w-auto"
        >
          Search
        </button>
      </form>
      {loading && <p className="text-blue-500 font-bold mt-4">Loading...</p>}
      {weather && (
        <div className="bg-slate-300 text-black mt-5 p-5 rounded-lg shadow-md text-left w-full sm:w-96 mx-2 sm:mx-0">
          <h2 className="text-2xl font-bold">{weather.name}, {weather.sys.country}</h2>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Weather: {weather.weather[0].description}</p>
          <p className="text-lg">Humidity: {weather.main.humidity}%</p>
          <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
          <p className="text-lg">Time: {new Date((new Date().getTime() + weather.timezone * 1000)).toUTCString()}</p>
        </div>
      )}
      {error && <p className="text-red-500 font-bold mt-4">{error}</p>}
    </div>
  );
};

export default Weather;
