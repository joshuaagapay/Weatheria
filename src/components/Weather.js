import React from 'react'
import Notification from './Notification'
import WeatherDetails from './WeatherDetails'

class Weather extends React.Component {

  render() {
    return (
      <div className="weather container">
        <div className="weather-name"><h2><p>Weatheria</p></h2></div>
        <Notification />
        <WeatherDetails />
      </div>
    )
  }
}

export default Weather