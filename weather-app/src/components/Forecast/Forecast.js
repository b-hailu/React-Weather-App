import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({})
  let [city, setCity] = useState(' ');
  let [unit, setUnit] = useState('imperial');

  const uriEncodedCity = encodeURIComponent(city)

  const getForecast = (e) => {
    e.preventDefault();
    // weather data fetch function will go here
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "54fa24106fmsha3a6cb723259e69p1fe9a0jsn070c25c51541"
      }
    })
    .then(response => response.json ())
    .then(response => {
      setResponseObj(response)
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    //  JSX code will go here
    <div>
      <h2>Find Current Weather Conditions</h2>
      {/* {JSON.stringify(responseObj)} */}
      <form onSubmit={getForecast}>
        <input
            type="text"
            placeholder="Enter City"
            maxLength="50"
            className={classes.textInput}
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
          type="radio"
          name="units"
          checked={unit === "imperial"}
          value="imperial"
          onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button
        className={classes.Button}
        type="submit">
          Get Forecast
          </button>
      </form>
      <Conditions responseObj={responseObj}/>
    </div>
  )
}

export default Forecast;
