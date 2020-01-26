import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILED, GET_LOCATION_FAILED, GET_LOCATION_SUCCESS } from './types'

import axios from 'axios'
const api_key = process.env.API_KEY;

export const getWeather = (latitude, longitude) => {
  return (dispatch) => {
    const url = `https:\\api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

    axios.get(url).then(response => {
      dispatch(getWeatherSuccess(response.data));
    }).catch(error => {
        console.log(error);
        return;
    })

  }
}

export const getWeatherSuccess = (result) =>{
  return {
    type: GET_WEATHER_SUCCESS,
    result: result
  }
}

export const getLocation = () => {

  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       if(position) {
        dispatch({ type: GET_LOCATION_SUCCESS, position: position.coords });
       } 
      }, error => {
        if(error.code === 1){
          dispatch({ type: GET_LOCATION_FAILED, error: "User denied the request for Geolocation." });
        }
      });
    }
  }
}

// export const showPosition = (position) => {
//   return (dispatch) => {
//     dispatch({ type: GET_LOCATION_SUCCESS, position: position });
//   }
// }

