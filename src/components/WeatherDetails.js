import React from 'react'
import logo from '../assets/unknown.png'

class WeatherDetails extends React.Component {

  render() {
    return (
      <div className="weather-details">
        <div className="weather-icon"><img src={logo} /></div>
        <div className="temperature-value"><h2><p>-°<span>C</span></p></h2></div>
        <div className="temperature-description"><p>-</p></div>
        <div className="location"><p>-</p></div>
      </div>
    )
  }
}

export default WeatherDetails