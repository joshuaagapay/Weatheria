import {
  FETCH_LOCATION_FAILED,
  FETCH_LOCATION_SUCCESS,
} from './types'

export const getLocation = () => {

  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          dispatch({ type: FETCH_LOCATION_SUCCESS, payload: position.coords });
        }
      }, (error) => {
        if (error.code === 1) {
          dispatch({ type: FETCH_LOCATION_FAILED, payload: "User denied the request for Geolocation." });
        }
      });
    }
  }
}