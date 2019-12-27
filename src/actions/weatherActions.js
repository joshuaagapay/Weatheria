import { GET_WEATHER, GET_LOCATION_FAILED, GET_LOCATION_SUCCESS } from './types'

import axios from 'axios'
const api_key = process.env.API_KEY;

export const getWeather = (latitude, longitude) => {
  const api = `https:\\api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
  return (dispatch) => {
    axios.get(api).then((response) => {
      dispatch({ type: 'GET_WEATHER', result: response });
    });
  }

}

export const getLocation = () => {

  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       if(position) {
        dispatch({ type: GET_LOCATION_SUCCESS, position: position });
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

