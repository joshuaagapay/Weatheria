import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
  CONVERT_TEMP_TO_FAHRENHEIT,
  CONVERT_TEMP_TO_CELSIUS
} from './types'

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

export const getWeatherSuccess = (result) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: result
  }
}

export const convertTemp = (unit) => {
  return (dispatch) => {
    if (unit === 'C') {
      dispatch({type: CONVERT_TEMP_TO_FAHRENHEIT, payload: 'F'});
    }else {
      dispatch({type: CONVERT_TEMP_TO_CELSIUS, payload: 'C'});
    }
  }
}

