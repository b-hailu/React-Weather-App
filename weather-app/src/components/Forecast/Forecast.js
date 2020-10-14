// import React, { useState } from 'react';
// import Conditions from '../Conditions/Conditions';
// import classes from './Forecast.module.css'


// const Forecast = () => {
//   let [responseObj, setResponseObj] = useState({})
//   let [city, setCity] = useState(' ');
//   let [unit, setUnit] = useState('imperial');
//   let [error, setError] = useState(false);
//   let [loading, setLoading] = useState(false)

//   // const uriEncodedCity = encodeURIComponent(city)

//   const getForecast = (e) => {
//     e.preventDefault();

//     if (city.length === 0) {
//       return setError(true);
//     }
//     // Clear state in preparation for new data
//     setError(false);
//     setResponseObj({});

//     setLoading(true);

//     const uriEncodedCity = encodeURIComponent(city)

//     // weather data fetch function will go here
//       fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//                   "x-rapidapi-key":
//       process.env.REACT_APP_API_KEY
//       }
//     })
//     .then(response => response.json ())
//     .then(response => {
//       if (response.cod !== 200) {
//         throw new Error()
//       }

//       setResponseObj(response)
//       setLoading(false);
//       // console.log(response);
//     })
//     .catch(err => {
//       setError(true)
//       setLoading(false);
//       console.log(err.message);
//     });
//   }
//   return (
//     //  JSX code will go here
//     <div>
//       <h2>Find Current Weather Conditions</h2>
//       {/* {JSON.stringify(responseObj)} */}
//       <form onSubmit={getForecast}>
//         <input
//             type="text"
//             placeholder="Enter City"
//             maxLength="50"
//             className={classes.textInput}
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//         />
//         <label className={classes.Radio}>
//           <input
//           type="radio"
//           name="units"
//           checked={unit === "imperial"}
//           value="imperial"
//           onChange={(e) => setUnit(e.target.value)}
//           />
//           Fahrenheit
//         </label>
//         <label className={classes.Radio}>
//           <input
//               type="radio"
//               name="units"
//               checked={unit === "metric"}
//               value="metric"
//               onChange={(e) => setUnit(e.target.value)}
//           />
//           Celcius
//         </label>
//         <button
//         className={classes.Button}
//         type="submit">
//           Get Forecast
//           </button>
//       </form>
//       <Conditions responseObj={responseObj}
//       error={error} new
//       loading={loading}
//       />
//     </div>
//   )
// }

// export default Forecast;
// import React from 'react';
// import Forms from '../Forms/Forms';

// const API_KEY="0fe7fd2b81697295586d4be9ad33c1f7";
// // 439d4b804bc8187953eb36d2a8c26a02";

// class Forcast extends React.Component {
//   getWeather = async (e) => {
//     e.preventDefault();
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;

//     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
//     // (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
//     // `https://samples.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
//     const data = await api_call.json();
//     console.log(data);
//   }
//   render(){
//     return(
//       <div>
//         Get Weather forcast
//         <Forms getWeather={this.getWeather} />
//       </div>
//     )
//   }
// }

// export default Forcast;
