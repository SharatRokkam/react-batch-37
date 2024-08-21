import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState([]);

  handleCityName = (e) => {
    setCity(e.target.value);
  };

  fetchWeather(){
    
  }
  handleSubmit = () => {
    fetchWeather();
  };

  return (
    <>
      <div className="weather-container">
        <input
          type="text"
          placeholder="enter the city name"
          value={city}
          required
          onChange={handleCityName}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
    </>
  );
};

export default Weather;
