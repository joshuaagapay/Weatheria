import { combineReducers } from 'redux'
import weather from './weatherReducer'
import location from './locationReducer'

export default combineReducers({
  weather,
  location
})