import { FETCH_LOCATION_FAILED, FETCH_LOCATION_SUCCESS } from '../actions/types'

const initState = {
    
  latitude: 0,
  longitude: 0,
  isLocated: false,
  error: null
  
}

const locationReducer = (state = initState, action) => {
 
  switch (action.type) {
    case FETCH_LOCATION_SUCCESS: {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        isLocated: true
      }
    }
    
    case FETCH_LOCATION_FAILED: {
      return {
        ...state,
        error: action.payload
      }
    }
      
    default:
      return state;
  }


}

export default locationReducer