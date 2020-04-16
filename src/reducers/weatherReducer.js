import { FETCH_WEATHER_SUCCESS, CONVERT_TEMP_TO_CELSIUS, CONVERT_TEMP_TO_FAHRENHEIT } from '../actions/types'

const initState = {

  icon: null,
  temperature: null,
  tempMin: null,
  tempMax: null,
  description: null,
  city: null,
  country: null,
  isLoaded: false,
  unit: 'C'
}

const weatherReducer = (state = initState, action) => {
  switch (action.type) {

    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        icon: action.payload.weather[0].icon,
        temperature: Math.round(action.payload.main.temp) - 273,
        tempMin: Math.round(action.payload.main.temp_min) - 273,
        tempMax: Math.round(action.payload.main.temp_max) - 273,
        description: action.payload.weather[0].description,
        city: action.payload.name,
        country: action.payload.sys.country,
        isLoaded: true
      }
    }

    case CONVERT_TEMP_TO_FAHRENHEIT: {
      return {
        ...state,
        temperature: Math.round((state.temperature * 9/5) + 32),
        unit: action.payload
      }
    }

    case CONVERT_TEMP_TO_CELSIUS: {
      return {
        ...state,
        temperature: Math.round((state.temperature - 32) * 5/9),
        unit: action.payload
      }
    }

    default:
      return state;
  }


}

export default weatherReducer