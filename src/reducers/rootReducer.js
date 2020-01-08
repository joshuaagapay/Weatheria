import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILED, GET_LOCATION_FAILED, GET_LOCATION_SUCCESS } from '../actions/types'

const initState = {

  notification: {
    showNotification: false,
    message: ''
  },

  data: {
    result: null,
  },

  location: {
    latitude: 0,
    longitude: 0
  }
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOCATION_SUCCESS:
      const location = Object.assign({}, state.location);
      location.latitude = action.position.latitude
      location.longitude = action.position.longitude
      
      const data = Object.assign({}, state.data);
      data.showWeatherDetails = true
      return {
        ...state,
        data: data,
        location: location,
      }

    default:
      return state;
  }


}

export default rootReducer