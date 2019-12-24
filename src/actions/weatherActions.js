import { GET_WEATHER } from './types'
import axios from 'axios'
const api_key = process.env.API_KEY;

export const getWeather = (latitude, longitude) => {
  const api = `https:\\api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
  return (dispatch) => {
    axios.get(api).then((response) =>{
      dispatch({type: 'GET_WEATHER', result:response});
    });
  }

}